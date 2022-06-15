import { sendData } from './api.js';
import { showAlert } from './util.js';
import { validateHashtag, validateComment } from './validation.js';
import { cancelUpload } from './upload.js';
import { showStatus } from './status.js';


const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');


const initForm = () => {
  hashtagInput.addEventListener('input', validateHashtag);
  commentInput.addEventListener('input', validateComment);
};


const removeForm = () => {
  hashtagInput.removeEventListener('input', validateHashtag);
  commentInput.removeEventListener('input', validateComment);
};


const successFormSubmit = () => {
  cancelUpload();
  showStatus(successMessageTemplate);  
};


const errorFormSubmit = (err) => {
  cancelUpload();
  showStatus(errorMessageTemplate);
  showAlert(err);
};


const setFormSubmit = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => successFormSubmit(),
      (err) => errorFormSubmit(err),
      new FormData(evt.target),
    );
  });
};

export { initForm, removeForm, setFormSubmit }






