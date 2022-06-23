import { isEscEvent, isFocused } from './util.js';

const body = document.querySelector('body');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');


const onEscKeydown = (modal) => {   
  return (evt) => {
    if (isEscEvent(evt) && !(isFocused(hashtagInput)) && !(isFocused(commentInput))) {
      evt.preventDefault();
      closeUserModal(modal);
    }
  }  
};


const openUserModal = (modal) => {
  body.classList.add('modal-open');  
  modal.classList.remove('hidden');  
  document.addEventListener('keydown', onEscKeydown(modal));
};


const closeUserModal = (modal) => {
  body.classList.remove('modal-open');
  modal.classList.add('hidden');   
  document.removeEventListener('keydown', onEscKeydown);
};

export { openUserModal, closeUserModal }