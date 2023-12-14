
import { burgerInit } from "./burger.js";
import { createElement } from "./helpers.js";
import { Card } from "./Card.js";
import { Menu } from "./Menu.js";
import { data, menuInform  } from "./data.js";





const tabs = document.querySelectorAll('.tab-item');



let menu = new Menu (document.querySelector('.menuu'), menuInform );
menu.activeTab = 'Coffee'






burgerInit()

