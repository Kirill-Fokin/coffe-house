export function burgerInit() {
  const menuItems = document.querySelectorAll('.menu__item');


  menuItems.forEach((el) => el.addEventListener('click', () => {header.classList.remove('open')
  document.body.style.overflow = '';
  }));
  
  const burger = document.querySelector('.header__burger-btn');
  const header = document.querySelector('.header');
  
  
  burger.addEventListener('click', () =>  {
    if(header.classList.contains('open')) {
      header.classList.remove('open')
      document.body.style.overflow = '';
    } else {
      header.classList.add('open')

      document.body.style.overflow = 'hidden';
    }
    
  }
  );
}  

export function isHideMenuLink()  {
    const header = document.querySelector(".header");
    const menuList= document.querySelector(".menu");
    const headerMenuLink = document.querySelector(".site-mark");
    window.innerWidth > 768 ? header.append(headerMenuLink) : menuList.append(headerMenuLink);
}


 function isHideMenu() {
    const header = document.querySelector(".header");
   
    if (window.innerWidth > 768)  header.classList.remove('open') ;
}
export function addResizeListeners() {
    addEventListener("resize", (event) => {
        isHideMenu()
      const header = document.querySelector(".header");
      const menuList= document.querySelector(".menu");
      const headerMenuLink = document.querySelector(".site-mark");
      window.innerWidth > 768 ? header.append(headerMenuLink) : menuList.append(headerMenuLink);
    });
}



