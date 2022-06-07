import { isConsistLettersNumbers, findDuplicate, isLengthValid } from './util.js';


const validateHashtag = (evt) => {  
  const hashtagInput = evt.target;
  const hashtags = hashtagInput.value.toLowerCase().trim().split(' ');
  const hashtagsLength = hashtags.length;
  const MAX_HASH_COUNT = 5;


  hashtags.forEach(hashtag => {
    const hashtagLength = hashtag.length;
    const MIN_HASH_LENGTH = 2;
    const MAX_HASH_LENGTH = 20; 
     
    if (hashtag[0] !== '#') {      
      hashtagInput.setCustomValidity('Хэш-тег должен начинаться с символа # (решётка)');
    } else if (hashtagLength < MIN_HASH_LENGTH) {
      hashtagInput.setCustomValidity('Еще ' + (MIN_HASH_LENGTH - hashtagLength) + ' симв.');
    } else if (!(isConsistLettersNumbers(hashtag.slice(1)))) {
      hashtagInput.setCustomValidity('Хэш-тег может состоять только из букв и чисел');
    } else  if (hashtagLength === MAX_HASH_LENGTH) {
      hashtagInput.setCustomValidity('Лимит длины хэш-тега достигнут');
    } else  if (hashtagLength > MAX_HASH_LENGTH) {
      hashtagInput.setCustomValidity('Лимит длины хэш-тега превышен на ' + (hashtagLength - MAX_HASH_LENGTH) + ' симв.');
    } else if (findDuplicate(hashtags, hashtag)) {    
      hashtagInput.setCustomValidity('Хэш-тег не может быть использован более одного раза');
    } else {    
      hashtagInput.setCustomValidity('');      
    }  
  });

  if (hashtagsLength > MAX_HASH_COUNT) {
    hashtagInput.setCustomValidity('Вы можете указать не более 5 хэш-тегов');
  }  else if (hashtagsLength === 1 && hashtags[0] === '') {
    hashtagInput.setCustomValidity('');
  }

  hashtagInput.reportValidity(); 
};


const validateComment = (evt) => {  
  const commentInput = evt.target; 
  const comment = commentInput.value;
  const MAX_COMMENT_LENGTH = 140;

  if (!(isLengthValid(comment, MAX_COMMENT_LENGTH))) {
    commentInput.setCustomValidity('Лимит длины хэш-тега превышен на ' + (comment.length - MAX_COMMENT_LENGTH) + ' симв.');
  } else {
    commentInput.setCustomValidity(''); 
  }

  commentInput.reportValidity(); 
};

export { validateHashtag, validateComment }