import { showSlider, hideSlider } from './slider.js';

const effectsList = document.querySelector('.effects__list');
const uploadImgPreview = document.querySelector('.img-upload__preview img');


const onEffectClick = (evt) => {
  const target = evt.target; 
  uploadImgPreview.className = '';
  
  if (target.classList.contains('effects__radio')) {    
    uploadImgPreview.classList.add(`effects__preview--${target.value}`)
  }  

  if (target.classList.contains('effects__radio') && target.value !== 'none') {
    showSlider(target.value);
  }

  if (target.classList.contains('effects__radio') && target.value === 'none') {
    hideSlider();
  }
};

const initEffect = () => {
  hideSlider();
  uploadImgPreview.className = '';
  effectsList.addEventListener('click', onEffectClick);
};

const removeEffect = () => {
  effectsList.removeEventListener('click', onEffectClick);
}

export { initEffect, removeEffect }