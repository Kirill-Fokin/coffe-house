import { createElement } from "./helpers.js";
import { Modal } from "./Modal.js";

export class Card {
  constructor (container, data ,cardNumber) {
    this.container = container;
    this.cardNumber = cardNumber
    this.data = data;
    this.modal = document.querySelector('.modal');
  
    this.render()
  }
  
    render() {

      this.item = this.cardNumber > 3 ? this.item = createElement('div', 'card', 'menu__card', 'card-none') : this.item = createElement('div', 'card', 'menu__card');

      this.image = createElement('img', 'card__image')
      this.imgWrapper = createElement('div', 'card__img-wrapper')
      this.title = createElement('h4', 'card__title')
      this.description = createElement('p', 'card__description')
      this.price = createElement('p', 'card__price')
      this.image.src = `./assets/paginations-images/${this.data.name}.png`;
      this.title.textContent = this.data.name;
      this.description.textContent = this.data.description; 
      this.price.textContent = ' $' + this.data.price;

      this.imgWrapper.append(this.image)
      this.item.append( this.imgWrapper,  this.title, this.description, this.price)
      this.additives = this.data.additives;

      if (Array.isArray(this.container)) {
        this.container.push(this.item);
      } else {
        this.container.append(this.item);
      }
      this.addListener() 
    }
    
    createModal () {
      const modal =  new Modal(this.data);
    }

    addListener() {
      this.item.addEventListener('click', () => this.createModal())
    }
  }