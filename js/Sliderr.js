import { createElement } from "./helpers.js";


export class Slider {
  constructor(container, data) {
    this.container = container;
    this.data = data;
    this.init(this.container)
    this.cardSize = '';

    this.timeState = 1;


  }

  getCardSize() {
    if (window.innerWidth < 550) {
      return  20;
    } else {
      return 49
    }
  }

  init(container) {
   
    for (let i = 0; i <= 2; i++ ) {  
      const slide = this.createSlide(this.data[i]);
      container.append(slide)    
    }

    this.container.style.left =    this.getCardSize() + 'rem'
    this.offset =  this.getCardSize();
  }

  createSlide (data, position) {
    const slide =  createElement('div', 'slider__card', 'card');

    const title = createElement('h3', 'card__title')
    title.textContent = data.title;
    const text = createElement('span', 'card__text')
    text.textContent = data.text;
    const price = createElement('span', 'card__price')
    price.textContent = data.price;
    const image = createElement('img', 'card__image');
    image.src = data.src;

    slide.append(image, title, text, price)
    return slide;
  }

  right () {
    this.offset -= this.getCardSize() ;
  if (this.offset  < -this.getCardSize()) {
    this.offset =  this.getCardSize();
  }
  this.container.style.left = this.offset + 'rem';
 
  }

  left () {
    console.log('left movement')
    this.offset += this.getCardSize() ;
    if (this.offset  > this.getCardSize() ) {
      this.offset = -this.getCardSize();
    }
    this.container.style.left = this.offset + 'rem';
  }

  

  

}