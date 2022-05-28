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
    newComment.querySelector('.social__text').textContent = message.join(' ');
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





















// const clearComments = () => {
//   commentContainer.innerHTML = '';
// };

// Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
// Подключите модуль в проект.

// Задача не имеет одного верного решения, поэтому будет правильным как использование третьего модуля
// для связки двух других, так и импорт модуля полноразмерных изображений в модуль миниатюр и дальнейшая
// работа с интерфейсом этого модуля, `addEventListener` и замыканиями. Последнее решение похоже на
// демонстрацию по учебному проекту. А первое — с третьим модулем — более сложное из-за отсутствия примера,
// но самостоятельное. В качестве третьего модуля можно выбрать точку входа, а можно завести отдельный модуль,
// например «Галерея». Решение за вами.