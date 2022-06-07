import { initScale, removeScale } from './scale.js';
import { initEffect,removeEffect } from './effect.js';
import { initForm, removeForm } from './form.js';
import { openUserModal, closeUserModal } from './modal.js';


const uploadInput= document.querySelector('#upload-file');
const uploadInputClose = document.querySelector('#upload-cancel');
const imgEditForm = document.querySelector('.img-upload__overlay');


const onUploadClick = () => {
  openUserModal(imgEditForm);
  initScale();
  initEffect();
  initForm();
};


const onUploadCloseClick = () => {
  closeUserModal(imgEditForm);
  removeScale();
  removeEffect();
  removeForm();
}

const initUpload = () => {
  uploadInput.addEventListener('click', onUploadClick);
  uploadInputClose.addEventListener('click', onUploadCloseClick);
}

export { initUpload }



