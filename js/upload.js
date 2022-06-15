import { initScale, removeScale } from './scale.js';
import { initEffect,removeEffect } from './effect.js';
import { initForm, removeForm } from './form.js';
import { openUserModal, closeUserModal } from './modal.js';


const uploadInput= document.querySelector('#upload-file');
const uploadInputClose = document.querySelector('#upload-cancel');
const imgEditForm = document.querySelector('.img-upload__overlay');


const startUpload = () => {
  openUserModal(imgEditForm);
  initScale();
  initEffect();
  initForm();
};


const cancelUpload = () => {
  closeUserModal(imgEditForm);
  removeScale();
  removeEffect();
  removeForm();
}

const initUpload = () => {
  uploadInput.addEventListener('click', startUpload);
  uploadInputClose.addEventListener('click', cancelUpload);
}

export { initUpload, cancelUpload }



