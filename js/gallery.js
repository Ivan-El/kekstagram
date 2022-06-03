import { similarPosts } from './data.js';
import { renderPreview } from './preview.js';
import { openUserModal, closeUserModal } from './modal.js';
import { renderComments, renderFullscreenPictures } from './fullscreen.js';

const renderGallery = () => {
  renderPreview(similarPosts);
  // На время убираем счетчики 
  const fotoCommentCount = document.querySelector('.social__comment-count');
  const fotoCommentLoader = document.querySelector('.comments-loader');
  fotoCommentCount.classList.add('hidden');
  fotoCommentLoader.classList.add('hidden');
  //   
  const previews = document.querySelectorAll('.picture');
  const fullScreenContainer = document.querySelector('.big-picture');
  const fullScreenContainerClose = fullScreenContainer.querySelector('.big-picture__cancel');


  const onPreviewClick = (previewElement) => {
    return () => {
      openUserModal(fullScreenContainer);            
      renderFullscreenPictures(previewElement, fullScreenContainer); 
      renderComments(previewElement);    
    } 
  }


  previews.forEach((preview, previewIndex) => preview.addEventListener('click', onPreviewClick(similarPosts[previewIndex])));
  fullScreenContainerClose.addEventListener('click', () => closeUserModal(fullScreenContainer));
}

export { renderGallery }