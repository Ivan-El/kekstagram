import { isEscEvent } from './util.js'
import { similarPosts } from './data.js';
import { renderPreview } from './preview.js';
import { renderComments, renderFullscreenPictures } from './fullscreen.js'

const renderGallery = () => {
  renderPreview(similarPosts);

  // На время убираем счетчики 
  const fotoCommentCount = document.querySelector('.social__comment-count');
  const fotoCommentLoader = document.querySelector('.comments-loader');
  fotoCommentCount.classList.add('hidden');
  fotoCommentLoader.classList.add('hidden');
  // 

  const body = document.querySelector('body');
  const previews = document.querySelectorAll('.picture');
  const fullScreenContainer = document.querySelector('.big-picture');
  const fullScreenContainerClose = fullScreenContainer.querySelector('.big-picture__cancel');


  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeUserModal();
    }
  };


  const openUserModal = () => {
    fullScreenContainer.classList.remove('hidden');  
    document.addEventListener('keydown', onPopupEscKeydown);
  };


  const closeUserModal = () => {
    body.classList.remove('modal-open');
    fullScreenContainer.classList.add('hidden');   
    document.removeEventListener('keydown', onPopupEscKeydown);
  };


  const onPreviewClick = (previewElement) => {
    return () => {
      openUserModal();      
      body.classList.add('modal-open');  
      renderFullscreenPictures(previewElement, fullScreenContainer); 
      renderComments(previewElement);    
    } 
  }


  previews.forEach((preview, previewIndex) => preview.addEventListener('click', onPreviewClick(similarPosts[previewIndex])));
  fullScreenContainerClose.addEventListener('click', () => closeUserModal());
}

export { renderGallery }