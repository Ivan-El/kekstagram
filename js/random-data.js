import { getRandomInt, getRandomArrayElement, getUniqueRandomInt } from './util.js';

const FOTO_COUNT = 25;

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const CommentsCount = {
  MIN: 1,
  MAX: 5,
};

const CommentsId = {
  MIN: 100,
  MAX: 5000,
}

const AvatarsCount = {
  MIN: 1,
  MAX: 6,
};

const MessagesCount = {
  MIN: 1,
  MAX: 2,
};

const FOTO_DESCRIPTIONS = [
  'Жизнь удалась',
  'Завидно?',
  'Зацени бро!',
  'Агонь!!!!1',
  'Без фильтров',
  'Новая камера',
  'Хороший ракурс',
  'Просто так',
  'Из архива',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Тирион Ланнистер',
  'Джон Сноу',
  'Дейенерис Таргариен',
  'Серсея Ланнистер',
  'Санса Старк',
  'Арья Старк',
]

const uniqCommentId = getUniqueRandomInt(CommentsId.MIN, CommentsId.MAX);

const createComments = () => {
  const sliceStart = getRandomInt(0, MESSAGES.length - 1);

  return {
    id: uniqCommentId(),
    avatar: 'img/avatar-' + getRandomInt(AvatarsCount.MIN, AvatarsCount.MAX) + '.svg',
    message:  MESSAGES.slice(sliceStart, sliceStart + getRandomInt(MessagesCount.MIN, MessagesCount.MAX)),
    name: getRandomArrayElement(NAMES),
  }
}

const uniqDescriptionId = getUniqueRandomInt(1, FOTO_COUNT);
const uniqPhotoUrl = getUniqueRandomInt(1, FOTO_COUNT);

const createDescription = () => { 
  return {
    id: uniqDescriptionId(),
    url: 'photos/' + uniqPhotoUrl() + '.jpg',
    description: getRandomArrayElement(FOTO_DESCRIPTIONS),
    likes: getRandomInt(LikesCount.MIN, LikesCount.MAX),
    comments: new Array(getRandomInt(CommentsCount.MIN, CommentsCount.MAX)).fill().map(() => createComments()),
  };
};

const randomPosts = new Array(FOTO_COUNT).fill().map(() => createDescription());

export { randomPosts };
