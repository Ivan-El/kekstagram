import { initScale } from './scale.js';
import { initEffect } from './effect.js';
import { openUserModal, closeUserModal } from './modal.js';


const uploadInput= document.querySelector('#upload-file');
const imgEditForm = document.querySelector('.img-upload__overlay');
const imgEditFormClose = document.querySelector('#upload-cancel');


const onUploadClick = (evt) => {
  evt.preventDefault(); 
  openUserModal(imgEditForm);
  initScale();
  initEffect();
}


uploadInput.addEventListener('click', onUploadClick);
imgEditFormClose.addEventListener('click', () => closeUserModal(imgEditForm));

