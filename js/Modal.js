import { createElement } from "./helpers.js";

export class Modal {
  constructor(data) {
    this.data = data;
    this.img = data.src;
    this.title = data.title;
    this.container = document.querySelector('.modal');
    this.currentSize = '';
    this.currentAdditive = '';
    
    this.defaultPrise = +this.data.price
    this.sizePrice = 0;
    this.dobavkaPrice = 0;


    this.desription = data.description;

    this.render()


  //  this.getTotalPrice()

    

    this.container.addEventListener('click', (e) => {
      // if(e.target) {
      // this.container.classList.remove('open');
      // setTimeout(this.modalBox.remove(), 0)
      // this.modalBox.remove()
      // }
    }  )
  }


  getTotalPrice() {
   
   const finalprice = document.querySelector('.total-price')

   finalprice.textContent = `$ ${+this.defaultPrise + +this.dobavkaPrice  + +this.sizePrice}`;

  
   
  }

    check(e) {
      if (e.target.classList.contains('modal')) {
        console.log(document.querySelector('.body'))
        this.item.remove();
         
        this.container.classList.remove('open');
        this.modalBox.remove()
      } 
    }

   render() {
     this.modalBox = createElement('div', 'modal__box')
   
     const modalLeft = createElement('div', 'modal__left')
     const modalRight = createElement('div', 'modal__right')
   
     const img = createElement('img', 'modal-img');
     img.src = `./assets/paginations-images/${this.data.name}.png`;
     modalLeft.append(img);

    this.modalBox.append(modalLeft);

    const title = createElement('h4', 'modal-title');
    title.textContent = this.data.name;
    modalRight.append(title)
    
    const description = createElement('h4', 'modal-description');
    description.textContent = this.data.description;
    modalRight.append(description)

    const sizeButtons = createElement('div', 'size-buttons','size-buttons__wrapper');


    
    this.sButton = createElement('h4', 'modal__button');
    this.sButton.addEventListener('click' , () =>{ 
    this.sButton.classList.add('active')
    this.sizePrice = 0;

    console.log(this.sizePrice )
    this.getTotalPrice()
  })

  
   
    this.mButton = createElement('h4', 'modal__button');


    this.mButton = createElement('h4', 'modal__button');
    this.mButton.addEventListener('click' , () =>{ 
    this.mButton.classList.add('active')

    this.sizePrice = this.data.sizes.m.add;
    console.log(this.sizePrice )
   
    
    this.getTotalPrice()
  })


    this.lButton   = createElement('h4','modal__button');



    this.lButton = createElement('h4', 'modal__button');


    this.lButton = createElement('h4', 'modal__button');
    this.lButton.addEventListener('click' , () =>{ 
    this.lButton.classList.add('active')

    this.sizePrice = this.data.sizes.l.add;
    console.log(this.sizePrice )
    
    this.getTotalPrice()
  })

    const sWord = createElement('span', 'size-buttons__sizeword');
    sWord.textContent = 's';
    const sizeS = createElement('span', 'size-buttons__size');
    sizeS.textContent = this.data.sizes.s.size;
    this.sButton.append(sWord, sizeS);

    const mWord = createElement('span', 'size-buttons__sizeword');
    mWord.textContent = 'm';
    const sizeM = createElement('span', 'size-buttons__size');
    sizeM.textContent = this.data.sizes.m.size;
    this.mButton.append(mWord, sizeM);

    const lWord = createElement('span', 'size-buttons__sizeword');
    lWord.textContent = 'l';
    const sizeL = createElement('span', 'size-buttons__size');
    sizeL.textContent = this.data.sizes.l.size;
    this.lButton.append(lWord, sizeL);

    const sizeWord = createElement('span', 'size-word');
    sizeWord.textContent = 'Size'
    modalRight.append(sizeWord);
    
    sizeButtons.append(this.sButton);
    sizeButtons.append(this.mButton);
    sizeButtons.append(this.lButton);

    this.currentSize  = 's';

    modalRight.append(sizeButtons);

    const additivesButtons = createElement('div', 'additive-Buttons', 'additive-buttons__wrapper');
    


    this.additiveButtonFirst = createElement('div', 'additive__button');
    
    this.additiveButtonFirst.addEventListener('click', () => {
      this.additiveButtonFirst.classList.add('button-active')
      this.dobavkaPrice = this.data.additives[0].add
      console.log(this.data.additives[0].add)
      
      this.getTotalPrice()
    })


    const newSizeWord  = createElement('span', 'size-buttons__sizeword')
    newSizeWord.textContent = '1'

    
     const newAdaptword  = createElement('div', 'additive__button__word');
     newAdaptword.textContent = this.data.additives[0].name;


     const newAdaptwordtwo  = createElement('div', 'additive__button__word');
     newAdaptwordtwo.textContent= this.data.additives[1].name;

 


     



     const newAdaptwordthree  = createElement('div', 'additive__button__word');
     newAdaptwordthree.textContent = this.data.additives[2].name;

     this.additiveButtonFirst.addEventListener('click', () => console.log('rkbr'))

 
    this.additiveButtonFirst.append(newSizeWord)
    
    this.additiveButtonFirst.append( newAdaptword)
    
    this.additiveButtonSecond = createElement('div', 'additive__button');

    this.additiveButtonSecond.addEventListener('click', () => {
      this.additiveButtonSecond.classList.add('button-active')
      this.dobavkaPrice = this.data.additives[1].add
      console.log(this.data.additives[1].add)
      
      this.getTotalPrice()
    })



    this.additiveButtonSecond.append(  newAdaptwordtwo)

    const newSizeWord2  = createElement('span', 'size-buttons__sizeword')
    newSizeWord2.textContent = '2'

   

    this.additiveButtonSecond.append(newSizeWord2, newAdaptwordtwo);


    const newSizeWord3  = createElement('span', 'size-buttons__sizeword')
    newSizeWord3.textContent = '3'


    this.additiveButtonThird = createElement('div', 'additive__button');

   
    this.additiveButtonThird.addEventListener('click', () => {
      this.additiveButtonThird.classList.add('button-active')
      this.dobavkaPrice = this.data.additives[2].add
      console.log(this.data.additives[2].add)


      this.getTotalPrice()
    })

    this.additiveButtonThird.append(newSizeWord3)

    this.additiveButtonThird.append(   newAdaptwordthree)



  
   
    additivesButtons.append(this.additiveButtonFirst);
    additivesButtons.append(this.additiveButtonSecond);
    additivesButtons.append(this.additiveButtonThird);



    const total__wrapper = createElement('div', 'total__wrapper')

    const total__word = createElement('div', 'total-word')
    total__word.textContent = 'Total'

    const finalPrice = createElement('div', 'total-price');
    finalPrice.textContent = '$ ' + this.defaultPrise;


    total__wrapper.append(total__word,finalPrice)

   const infoWrapper = createElement('div', 'info__wrapper');

   const infoButton = createElement('div', 'info-button');
   infoButton.textContent = 'i'

   const infoDescription = createElement('div', 'info-description');
   infoDescription.textContent = `The cost is not final.
    'Download our mobile app to see the final price and place your order.
    Earn loyalty points and enjoy your favorite coffee with up to 20% discount`
    

   infoWrapper.append(infoButton, infoDescription)

    const closeButton = createElement('button', 'close-button')
    closeButton.textContent = 'Close';


    closeButton.addEventListener('click', () => {
      
      this.container.classList.remove('open');
      setTimeout(this.modalBox.remove(), 0)
      this.modalBox.remove()


    })


    modalRight.append(additivesButtons, total__wrapper,infoWrapper,closeButton);

    this.modalBox.append(modalLeft);
    this.modalBox.append(modalRight);


    this.container.append(this.modalBox)
    this.container.classList.add('open');

  }

  

}