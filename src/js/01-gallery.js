// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            title="${description}"
           />
        </a>
      </li>
  `
    )
    .join("");
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});


// Change code below this line

console.log(galleryItems);
