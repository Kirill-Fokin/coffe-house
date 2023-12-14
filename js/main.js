import { burgerInit } from "./burger.js";
import { addResizeListeners, isHideMenuLink } from "./burger.js";
import { sliderData } from "./data.js";

import { Slider } from "./Sliderr.js";


  // alert('Здравствуйте я доделал большую часть,если вам не состаляет труда, можете посмотреть вечером, хотел доделать модал и исправить баги, или оставьте контакт и если я исправлю то напишу вам, извняюсь за неудобства ');

const sliderWrapper = document.querySelector('.slider__wrapper');
const arrowLeft = document.querySelector('.slider__arrow-left');
const arrowRight = document.querySelector('.slider__arrow-right');

sliderWrapper.innerHTML = '';

const sliderBlocks = document.querySelectorAll('.slider-blocks__block');
const sliderWhiteBlocks = document.querySelectorAll('.slider-blocks__up')
const sliderWhiteBlockTwo =  sliderWhiteBlocks[0];


let counter = 0;




const slider = new Slider(sliderWrapper, sliderData);

arrowRight.addEventListener('click', () =>{ 
  sliderWhiteBlocks[slider.currentBlock].style.width = '0%';
  counter = 0
  slider.currentBlock++ 
  if (slider.currentBlock > 2) {
    slider.currentBlock = 0
  }
  slider.right();
  
}
);


document.addEventListener('keydown', function(e) {   
  console.log(e.code)
  if (e.code == 'ArrowRight') {
    sliderWhiteBlocks[slider.currentBlock].style.width = '0%';
    counter = 0
    slider.currentBlock++ 
    if (slider.currentBlock > 2) {
      slider.currentBlock = 0
    }
    slider.right();
  }

  if (e.code == 'ArrowLeft') {
    sliderWhiteBlocks[slider.currentBlock].style.width = '0%';
    counter = 0
    
    slider.currentBlock--
    if (slider.currentBlock < 0) {
      slider.currentBlock = 2
    }
    slider.left()
  }

})


arrowLeft.addEventListener('click', () =>{ 
  sliderWhiteBlocks[slider.currentBlock].style.width = '0%';
  counter = 0
  
  slider.currentBlock--
  if (slider.currentBlock < 0) {
    slider.currentBlock = 2
  }
  slider.left()
  })


burgerInit()
isHideMenuLink()
addResizeListeners ()

export function increaseGreeenBlock () {

      slider.currentBlock = 0
    
      sliderWhiteBlocks[slider.currentBlock].style.width = '0%';
    
      const intervalAnimation = setInterval(function() {
          console.log('time: ' + slider.timeState)
        if (slider.timeState) {
    
       if (counter > 40) {
    
        sliderWhiteBlocks[slider.currentBlock].style.width = '0%';
        slider.currentBlock ++; 
        slider.right()
    
         if (slider.currentBlock > 2) {
          
           slider.currentBlock  = 0;
         }
         counter = 0;
       }
         counter++;
    
         sliderWhiteBlocks[slider.currentBlock].style.width = `${counter}px`;
      }
    
       }, 125)
    }


    increaseGreeenBlock()

  
const pre = document.querySelector('.card-image')
console.log(pre)


document.querySelector('.slider').addEventListener('mouseenter', () => 
{
  slider.timeState = 0
})

document.querySelector('.slider').addEventListener('mouseleave', () =>  slider.timeState = 1)
