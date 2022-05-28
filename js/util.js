const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }
      
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isLengthValid = (string, maxLength) => {
  if(typeof string === 'string') {
    return string.length <= maxLength;
  }

  return alert('Неверный тип, ввидите строку');
};

const getRandomArrayElement = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

const getUniqueRandomInt = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInt(min, max);
    
    if (previousValues.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export { getRandomInt, isLengthValid, getRandomArrayElement, getUniqueRandomInt, isEscEvent };
