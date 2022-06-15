const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

const ALERT_SHOW_TIME = 5000;

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }
      
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
  return evt.key === Keys.ESC || evt.key === Keys.ESCAPE;
};

const isFocused = (element) => {
  return element === document.activeElement;
};


const isConsistLettersNumbers = (string) => /^[0-9A-ZА-ЯЁ]+$/i.test(string);


const isLengthValid = (string, maxLength) => {
  if(typeof string === 'string') {
    return string.length <= maxLength;
  }
};


const findDuplicate = (array, element) => {
  return array.indexOf(element) !== array.lastIndexOf(element)
};


const showAlert = (error) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.lineHeight = '40px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = error;
  
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}


export { getRandomInt, isLengthValid, getRandomArrayElement, getUniqueRandomInt, isEscEvent, isConsistLettersNumbers, findDuplicate, isFocused, showAlert };
