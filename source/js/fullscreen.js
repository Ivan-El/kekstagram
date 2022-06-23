import { openUserModal, closeUserModal } from './modal.js';

const renderComments = (previewElement) => {
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
  const commentsLoadedCount = document.querySelector('.comments-show-count');
  const commentContainer = document.querySelector('.social__comments');
  const commentsLoader = document.querySelector('.comments-loader');
  const commentsFragment = document.createDocumentFragment();
  const previewComments = previewElement.comments;
  const previewCommentsLength = previewComments.length;

  const COMMENT_SHOW_STEP = 5;

  let commentsCount = COMMENT_SHOW_STEP;
  let commentsLoaded;


  const setCommentsCount = () => {
    commentsLoaded = previewComments.slice(0, commentsCount);
    commentsLoadedCount.textContent = commentsLoaded.length;
  };


  const checkLoader = () => {
    if (previewCommentsLength > COMMENT_SHOW_STEP && commentsLoaded.length < previewCommentsLength) {
      commentsLoader.classList.remove('hidden');
      commentsLoader.addEventListener('click', onCommentsLoaderClick, { once: true })
    } else {
      commentsLoader.classList.add('hidden');
    }
  };


  const clearComments = (container) => container.innerHTML = '';


  const createComments = (arr) => {
    arr.forEach(({avatar, name, message}) => {
      const newComment = commentTemplate.cloneNode(true);
      newComment.querySelector('.social__picture').src = avatar;
      newComment.querySelector('.social__picture').alt = name;
      newComment.querySelector('.social__text').textContent = message;
      commentsFragment.appendChild(newComment);
    });

    return commentContainer.appendChild(commentsFragment);
  };


  const showComments = (param) => {
    return new Promise(resolve => {
      resolve(param);
    }).then((result) => commentsCount = result)
      .then(() => setCommentsCount())
      .then(() => checkLoader())
      .then(() => clearComments(commentContainer))
      .then(() => createComments(commentsLoaded));
  };


  const onCommentsLoaderClick = () => {
    showComments(commentsCount += COMMENT_SHOW_STEP);
  };


  showComments((previewCommentsLength < COMMENT_SHOW_STEP) ? previewCommentsLength : commentsCount);
};


const renderPictures = ({url, likes, comments, description}, container) => {
  container.querySelector('.big-picture__img img').src = url;
  container.querySelector('.likes-count').textContent = likes;
  container.querySelector('.comments-count').textContent = comments.length;
  container.querySelector('.social__caption').textContent = description;
};


const renderFullscreen = (posts) => {
  const previews = document.querySelectorAll('.picture');
  const fullScreenContainer = document.querySelector('.big-picture');
  const fullScreenContainerClose = fullScreenContainer.querySelector('.big-picture__cancel');


  const onPreviewClick = (previewElement) => {
    return () => {
      openUserModal(fullScreenContainer);
      renderComments(previewElement);
      renderPictures(previewElement, fullScreenContainer);
    }
  };


  previews.forEach((preview, previewIndex) => preview.addEventListener('click', onPreviewClick(posts[previewIndex])));
  fullScreenContainerClose.addEventListener('click', () => closeUserModal(fullScreenContainer));
};

export {  renderFullscreen }
