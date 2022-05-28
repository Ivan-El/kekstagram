const renderPreview = (posts) => {
  const previews = posts;
  const previewContainer = document.querySelector('.pictures');
  const previewTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const previewsFragment = document.createDocumentFragment();

  previews.forEach(({url, likes, comments}) => {
    const previewElement = previewTemplate.cloneNode(true);

    previewElement.querySelector('.picture__img').src = url;
    previewElement.querySelector('.picture__likes').textContent = likes;
    previewElement.querySelector('.picture__comments').textContent = comments.length;
    previewsFragment.appendChild(previewElement);
  });

  return previewContainer.appendChild(previewsFragment);
}

export { renderPreview }
