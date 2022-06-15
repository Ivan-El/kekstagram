import { setFormSubmit } from './form.js';
import { randomPosts } from './random-data.js';
import { renderGallery } from './gallery.js';
import { initUpload } from './upload.js';
import { getData } from './api.js';


getData((previews) => {renderGallery(previews);
},(err)=> renderGallery(randomPosts, err));
setFormSubmit();
initUpload();
