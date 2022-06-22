import { randomPosts } from './random-data.js';
import { renderGallery } from './gallery.js';
import { initUpload } from './upload.js';
import { setFormSubmit } from './form.js';
import { setFilter } from './filter.js';
import { debounce } from './util.js';
import { getData } from './api.js';


getData((previews) => {
  renderGallery(previews);
  setFilter(debounce((filter) => renderGallery(previews, filter, null)));
},
(err)=> renderGallery(randomPosts, null, err));
setFormSubmit();
initUpload();




