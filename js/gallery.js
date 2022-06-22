import { showAlert } from './util.js'
import { renderPreview } from './preview.js';
import { renderFullscreen } from './fullscreen.js';
import { applyFilter } from './filter.js';


const renderGallery = (posts, filter, err) => {
  if (err) {
    showAlert(err);
  }

  new Promise(resolve => {
    resolve(applyFilter(posts, filter))
  }).then((filtered) => {
    renderPreview(filtered);
    renderFullscreen(filtered);
  });
}

export { renderGallery }
