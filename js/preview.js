import { similarDescription } from './data.js'

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictures = similarDescription;

const picturesFragment = document.createDocumentFragment();

pictures.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  picturesFragment.appendChild(pictureElement);
});

const renderPictures = () => pictureContainer.appendChild(picturesFragment);


export { renderPictures }
