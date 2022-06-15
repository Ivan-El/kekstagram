import { isEscEvent } from './util.js';


const showStatus = (template) => {
  const statusMessage = template.cloneNode(true);
  document.body.appendChild(statusMessage);


  const onStatusMessageClick = (evt) => {
    const statusInner = statusMessage.querySelector('div');
    const statusButton = statusMessage.querySelector('button');
    const target = evt.target;     
  
    if (target === statusButton || target !== statusInner) {
      statusMessage.remove();
      document.removeEventListener('keydown', onEscKeydown);
    }
  };
  
  
  const onEscKeydown = (evt) => {  
    if (isEscEvent(evt)) {
      evt.preventDefault();
      statusMessage.remove();
      document.removeEventListener('keydown', onEscKeydown);
    }       
  };

  statusMessage.addEventListener('click', onStatusMessageClick);
  document.addEventListener('keydown', onEscKeydown);
}

export { showStatus }





