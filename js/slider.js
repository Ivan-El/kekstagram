const slider = document.querySelector('.effect-level');
const valueOutput = document.querySelector('.effect-level__value');
const img = document.querySelector('.img-upload__preview img');


const initSlider = (effectName) => { 
  const sliderStripe = slider.querySelector('.effect-level__stripe');
  const sliderToggle = document.querySelector('.effect-level__bar-toggle');
  const sliderBar = slider.querySelector('.effect-level__bar');
  const barWidth = sliderBar.clientWidth;
  const barHeight = sliderBar.clientHeight;

  const onMouseDown = (evt) => {
    evt.preventDefault();
    sliderBar.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const onMouseUp = () => {
    sliderBar.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (evt) => {
    let coordinateX = evt.offsetX;
    const containerWidth = evt.target.offsetWidth;
    coordinateX = Math.min(containerWidth, Math.max(0, coordinateX));

    displayEffect(coordinateX, effectName);
    displayRange(coordinateX); 
  };

  const displayEffect = (coordinate, effect) => {    
    const percentFromWidth = Math.round((coordinate * 100) / barWidth);    
    let effectIntensivityRatio;
    let effectMeasure;
    let cssEffectName;

    switch (effect) {
      case 'chrome':
        cssEffectName ='grayscale';
        effectMeasure = '';
        effectIntensivityRatio = (percentFromWidth / 100).toFixed(1); 
        break;

      case 'sepia':
        cssEffectName ='sepia';
        effectMeasure = '';
        effectIntensivityRatio = (percentFromWidth / 100).toFixed(1); 
        break;

      case 'marvin':        
        cssEffectName ='invert';
        effectMeasure = '%';
        effectIntensivityRatio = percentFromWidth;
        break;

      case 'phobos':
        cssEffectName = 'blur';
        effectMeasure = 'px';
        effectIntensivityRatio = (percentFromWidth / 33).toFixed(1);
        break; 

      case 'heat':
        cssEffectName = 'brightness';
        effectMeasure = '';
        effectIntensivityRatio = 1 + (+(percentFromWidth / 50).toFixed(1));
        break;         
    }

    valueOutput.value = effectIntensivityRatio;
    img.style.filter = cssEffectName + '(' + effectIntensivityRatio + effectMeasure + ')';    
  };

  const displayRange = (coordinate) => {
    const halfToggleWidth = sliderToggle.offsetWidth / 2; 

    sliderToggle.style.left = coordinate - halfToggleWidth + 'px';
    sliderStripe.style.clip = 'rect(0,' + coordinate + 'px,' + barHeight + 'px,0)';      
  };  

  const startSlider = () => {    
    sliderBar.addEventListener('mousedown', onMouseDown);     
    displayRange(barWidth);    
    displayEffect(barWidth, effectName);
  };

  startSlider();
};


const hideSlider = () => {
  slider.classList.add('hidden');
  valueOutput.value = 0;
  img.style.filter = 'none';
}


const showSlider = (effect) => {
  if(slider.classList.contains('hidden')) {
    slider.classList.remove('hidden');
  }

  initSlider(effect);
}

export { showSlider, hideSlider }