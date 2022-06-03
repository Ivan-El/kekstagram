const imgScale = document.querySelector('.img-upload__scale');
const imgScaleOtput = imgScale.querySelector('.scale__control--value');
const imgScaleSmaller = imgScale.querySelector('.scale__control--smaller');
const imgScaleBigger = imgScale.querySelector('.scale__control--bigger');
const uploadImgPreview = document.querySelector('.img-upload__preview img');

const scale = {
  MIN: 25,
  MAX: 100,
  step: 25,

  getValue() {
    return +imgScaleOtput.value.slice(0, -1);
  },

  reduceValue() {
    return this.getValue() - this.step;
  },

  increaseValue () {
    return this.getValue() + this.step;
  },

  setOutputValue(value = this.MAX) {
    return value + '%';
  },

  setTransformValue () {
    return `scale(${this.getValue() / 100})`;
  },

  isValidMinValue () {
    return this.getValue() > this.MIN;
  },

  isValidMaxValue () {
    return this.getValue() < this.MAX;
  },
};


const onImgScaleClick = (evt) => { 
  const target = evt.target;
  
  if (target === imgScaleSmaller && scale.isValidMinValue()) {  
    imgScaleOtput.value = scale.setOutputValue(scale.reduceValue());
  } else if (target === imgScaleBigger && scale.isValidMaxValue()) {
    imgScaleOtput.value = scale.setOutputValue(scale.increaseValue());
  }

  uploadImgPreview.style.transform = scale.setTransformValue();
};


const initScale = () => {
  imgScaleOtput.value = scale.setOutputValue()
  uploadImgPreview.style.transform = scale.setTransformValue();
  imgScale.addEventListener('click', onImgScaleClick)
};

export { initScale }
