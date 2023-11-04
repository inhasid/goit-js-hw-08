import throttle from 'lodash.throttle';

const refs = {
    formElement: document.querySelector('.feedback-form'),
 
};

refs.formElement.addEventListener('input', throttle(onFormInput, 500));
refs.formElement.addEventListener('submit', onFormSubmit);

let objFormValue = {};

function onFormInput(e) {
  objFormValue = {
      email: refs.formElement.elements.email.value,
      message: refs.formElement.elements.message.value,
  };
  localStorage.setItem('feedback-form-local-data', JSON.stringify(objFormValue));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (refs.formElement.elements.email.value && refs.formElement.elements.message.value) {
    console.log(localStorage.getItem('feedback-local-data'));
    e.currentTarget.reset();
    localStorage.removeItem('feedback-local-data');
    objFormValue = {};
  } else {
    alert('Please fill out all forms field');
  }
}

function onLoad() {
  const formData = JSON.parse(
    localStorage.getItem('feedback-local-data')
  );
    if (formData) {
      refs.formElement.elements.email.value = formData.email || '';
      refs.formElement.elements.message.value = formData.message || '';
  }
}
onLoad();