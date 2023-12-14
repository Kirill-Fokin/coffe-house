export const createElement = (tagName, ...classNames) => {
    const element = document.createElement(tagName);
    element.classList.add(...classNames);
    
    return element;
  };


  export function is_cursor_on_elem( ev, elem ){

    let mouseX = ev.clientX
    let mouseY = ev.clientY
    let rect = elem.getBoundingClientRect()

  
    return (
      mouseX > rect.x && mouseX < rect.bottom
      &&
      mouseY > rect.y && mouseY < rect.right
    )
  }