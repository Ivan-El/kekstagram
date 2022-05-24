import { getRandomInt, getRandomArrayElement } from './util.js';

const FOTO_COUNT = 25;

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const CommentsCount = {
  MIN: 1,
  MAX: 5,
};

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


const createComments = (elementIndex) => {
  let sliceStart = getRandomInt(0, MESSAGES.length - 1);

  return {
    id: elementIndex * getRandomInt(1, FOTO_COUNT),
    avatar: 'img/avatar-' + getRandomInt(AvatarsCount.MIN, AvatarsCount.MAX) + '.svg',
    message:  MESSAGES.slice(sliceStart, sliceStart + getRandomInt(MessagesCount.MIN, MessagesCount.MAX)),
    name: getRandomArrayElement(NAMES),
  }
}

const createDescription = (elementIndex) => {
  return {
    id: elementIndex,
    url: 'photos/' + elementIndex + '.jpg',
    description: getRandomArrayElement(FOTO_DESCRIPTIONS),
    likes: getRandomInt(LikesCount.MIN, LikesCount.MAX),
    comments: new Array(getRandomInt(CommentsCount.MIN, CommentsCount.MAX)).fill().map(() => createComments(elementIndex)),
  };
};

const similarDescription = new Array(FOTO_COUNT).fill().map((e, i) => e = createDescription(i += 1));

export { similarDescription };
