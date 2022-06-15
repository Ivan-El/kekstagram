const clearComments = (container) => container.innerHTML = '';


const renderComments = (previewElement) => {
  const commentsFragment = document.createDocumentFragment();
  const currentPreviewComments = previewElement.comments; 
  const commentContainer = document.querySelector('.social__comments');  
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

  clearComments(commentContainer);  

  currentPreviewComments.forEach(({avatar, name, message}) => {  
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = avatar; 
    newComment.querySelector('.social__picture').alt = name; 
    newComment.querySelector('.social__text').textContent = message;
    commentsFragment.appendChild(newComment);   
  }); 

  return commentContainer.appendChild(commentsFragment);
};


const renderFullscreenPictures = ({url, likes, comments, description}, container) => {
  container.querySelector('.big-picture__img img').src = url;
  container.querySelector('.likes-count').textContent = likes;
  container.querySelector('.comments-count').textContent = comments.length;
  container.querySelector('.social__caption').textContent = description;
};

export { renderComments, renderFullscreenPictures }
