import "./modules/slider";

import burger from "./modules/burger";
import smoothScroll from "./modules/smoothScroll";
import tabs from "./modules/tabs"
import select from "./modules/select";
import modal from "./modules/modal";
import mask from "./modules/mask";
import animate from "./modules/animation";


document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    burger();
    smoothScroll();
    tabs('.price__tabs', '.price__tab', '.price__wrapper', 'price__tab_active');
    select('.price__select_items', '.price__wrapper');
    modal();
    mask('[name="phone"]')
    animate();
})




