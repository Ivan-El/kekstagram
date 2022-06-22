import { getRandomInt, shuffleArray } from './util.js';


const filter = document.querySelector('.img-filters');
const filterForm = filter.querySelector('.img-filters__form');
let filtredPosts;

const RANDOM_POST_COUNT = 10;


const disableButtons = () => {
  const filterButtons = filter.querySelectorAll('.img-filters__button');

  filterButtons.forEach((button) => {
    if (button.classList.contains('img-filters__button--active')){
      button.classList.remove('img-filters__button--active');
    }
  });
};


const setFilter = (cb) => {
  filter.classList.remove('img-filters--inactive');

  const onFilterClick = (evt) => {
    const target = evt.target;

    if (target.classList.contains('img-filters__button') && !(target.classList.contains('img-filters__button--active'))){
      disableButtons();
      target.classList.add('img-filters__button--active');

      if (target.id.endsWith('random')) {
        cb('random');
      } else if (target.id.endsWith('default')) {
        cb('default');
      } else if (target.id.endsWith('discussed')) {
        cb('discussed');
      }
    }
  };

  filterForm.addEventListener('click', onFilterClick);
};


const setRandomFilter = (array, count) => {
  const sliceEnd = array.length - count;
  const sliceStart = getRandomInt(0, sliceEnd);

  return shuffleArray(array.slice(sliceStart, sliceStart + count));
};


const setDiscussedFilter = (array) => {
  const getCommentsCount = (post) => {
    return post.comments.length;
  };

  const comparePosts = (postA, postB) => {
    const rankA = getCommentsCount(postA);
    const rankB = getCommentsCount(postB);

    return rankB - rankA;
  };

  return array.slice().sort(comparePosts);
};


const applyFilter = (array, someFilter) => {
  switch (someFilter) {
    case 'random':
      filtredPosts = setRandomFilter(array, RANDOM_POST_COUNT);
      break;

    case 'discussed':
      filtredPosts = setDiscussedFilter(array);
      break;

    default:
      filtredPosts = array;
      break;
  }

  return filtredPosts
};

export { setFilter, applyFilter }
