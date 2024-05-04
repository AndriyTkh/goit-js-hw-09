'use strict';

let formData = { email: '', message: '' };
const formKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[type="email"]');
const message = document.querySelector('textarea[name="message"]');

if (localStorage.getItem(formKey)) {
  formData = JSON.parse(localStorage.getItem(formKey));
  email.value = formData.email;
  message.value = formData.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(formKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Please, fill all fields.');
    return;
  }

  console.log(formData);
  localStorage.removeItem(formKey);
  form.reset();
});
