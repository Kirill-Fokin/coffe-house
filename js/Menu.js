import { createElement } from "./helpers.js";
import { data } from "./data.js";
import { Card } from "./Card.js";

export class Menu  {
  constructor(container, data) {
    this.container = container;
    this.data = data;
    this.wrapper = createElement('div','list');
    this.tabs = document.querySelector('.tab-item')
    this.removeButtonState = true;

    this.coffeMemory = []
    this.coffeBuffer = []

    this.dessertMemory = []
    this.dessertBuffer = [];

    this.teaMemory = [];
    this.teaBuffer = [];
    this.tabs = document.querySelectorAll('.tab-item');

  
    this.renderCards();
  
    // this.renderSVG()
    

    this.init(this.coffeMemory)
  

    this.lists = document.querySelectorAll('.list')

    this.addListeners()
  }

    isMobile() {
      
      return window.innerWidth < 550;
    }

    hideBlocks() {
      const currentWrapper = document.querySelector('.list');
      const list = Array.from(currentWrapper.childNodes);

     console.log(list)

     for (let i =0; i  < list.length; i++) {
      console.log(list[i])
      if (i > 3) {
        list[i].remove()
        //добавить svg
      }
     }
    }

    changeActiveButton(n) {
      this.tabs.forEach((el) => el.classList.remove('active'))
      this.tabs[n].classList.add('active')
    }
    

    addListeners () {
      this.tabs[0].addEventListener('click', () => {
        this.changeTab(this.coffeMemory)
        this.changeActiveButton(0)
        
      })
      this.tabs[1].addEventListener('click', () =>{ 
        this.changeTab(this.teaMemory)
        this.changeActiveButton(1)
         this.refreshButton.remove()
      })
       
      this.tabs[2].addEventListener('click', () => {
        this.changeTab(this.dessertMemory)
        this.changeActiveButton(2)
        this.refreshButton.style.display  = 'block'
       
      })


      this.refreshButton.addEventListener('click', () => {
        console.log(this.tabs)
        if (this.tabs[0].classList.contains('active')) {
          const currentList = document.querySelector('.list')
            for (let i = 4; i  < this.coffeMemory.length; i++) {
            const card = new Card(currentList, this.coffeMemory[i])
            
          } 
          this.refreshButton.remove() 
        }

        if (this.tabs[2].classList.contains('active')) {
          const currentList = document.querySelector('.list')
            for (let i = 4; i  < this.dessertMemory.length; i++) {
            const card = new Card(currentList, this.dessertMemory[i])
            
          } 
          this.refreshButton.remove() 
        }
      })
    }



    init (type) {
     
      console.log(type)

      for (let i = 0;  i < type.length; i++) {

        const card = new Card(this.wrapper, type[i], i)
      }

      this.container.append(this.wrapper)

      console.log(this.isMobile())

      if (this.isMobile()) {
        this.hideBlocks()
      }
   
      this.refreshButton = document.querySelector('.refresh-button');
      document.querySelector('.menuu').append(this.refreshButton )

      this.changeActiveButton(0)
    }


    changeTab (tab) {

    
     document.querySelector('.list').remove()
     this.wrapper = createElement('div','list');
   

     for (let i = 0;  i < tab.length; i++) {

      const card = new Card(this.wrapper, tab[i], i)
    }

    this.container.append(this.wrapper)



    if (this.isMobile()) {
      this.hideBlocks()
    }


   
    this.refreshButton = document.querySelector('.refresh-button');
    document.querySelector('.menuu').append(this.refreshButton )
     
    if (this.tabs[1].classList.contains('active')) {
      console.log(666)
    }
 
    }
    

    findMemory (category) {
        const currentMemory = category === 'coffee' ? this.coffeMemory : 
        category === 'tea' ? this.teaMemory  : category === 'dessert' ? this.dessertMemory : 1; 

      return currentMemory
    }

      
    findBuffer (category) {
      const currentBuffer = category === 'coffee' ? this.coffeBuffer : 
      category === 'tea' ? this.teaBuffer  : category === 'dessert' ? this.dessertBuffer : 1; 
      return currentBuffer
    }
  
    renderCards() {
      for (let i = 0; i < data.length; i++) {

        const category = data[i].category;

        console.log(category)


      this.findMemory(category).push(data[i])
     
      }
      

      
    }
  
    

    renderSVG() {
     this.refreshButton = document.querySelector('.refresh-button')
     this.container.append(this.refreshButton);
     // this one creates only with one condition: current wrapper length > 4 or buffer  > 0
    }


    
  }