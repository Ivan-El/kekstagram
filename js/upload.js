import { initScale, removeScale } from './scale.js';
import { initEffect,removeEffect } from './effect.js';
import { initForm, removeForm } from './form.js';
import { openUserModal, closeUserModal } from './modal.js';


const uploadInput= document.querySelector('#upload-file');
const uploadInputClose = document.querySelector('#upload-cancel');
const imgEditForm = document.querySelector('.img-upload__overlay');
const preview = document.querySelector('.img-upload__preview img');
const effectPreviews = document.querySelectorAll('.effects__preview');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];


const startUpload = () => {
  const file = uploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });


  new Promise((resolve) => {
    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        preview.src = reader.result;
        effectPreviews.forEach((element) => element.style.backgroundImage = `url(${reader.result})`);
        resolve();
      });

      reader.readAsDataURL(file);
    }
  }).then(() => openUserModal(imgEditForm))
    .then(() => initScale())
    .then(() => initEffect())
    .then(() => initForm())
};


const cancelUpload = () => {
  closeUserModal(imgEditForm);
  removeScale();
  removeEffect();
  removeForm();
};


const initUpload = () => {
  uploadInput.addEventListener('change', startUpload);
  uploadInputClose.addEventListener('click', cancelUpload);
}

export { initUpload, cancelUpload }



