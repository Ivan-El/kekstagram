import { validateHashtag, validateComment } from './validation.js';

const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');


const initForm = () => {
  hashtagInput.addEventListener('input', validateHashtag);
  commentInput.addEventListener('input', validateComment);
}

const removeForm = () => {
  hashtagInput.removeEventListener('input', validateHashtag);
  commentInput.removeEventListener('input', validateComment);
}

export { initForm, removeForm }






