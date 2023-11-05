import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function savePlaybackTime(currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime)
}

player.on('timeupdate', throttle((data) => {
    savePlaybackTime(data.seconds);
}, 1000));

function restorePlaybackTime() {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        player.setCurrentTime(parseFloat(savedTime));
    }
}

player.ready().then(() => {
    restorePlaybackTime();
});
