'use strict';

const burgerBtn = document.querySelector('.hamburger'),
      header = document.querySelector('.promo__header'),
      logo = document.querySelector('.promo__logo'),
      promoNav = document.querySelector('.promo__nav'),
      promoMenu = document.querySelector('.promo__menu'),
      promoLink = document.querySelectorAll('.promo__link'),
      phone = document.querySelector('.promo__phone'),
      phoneBtn = document.querySelector('.button__promo');

const toggleMenu = () => {
    burgerBtn.classList.toggle('hamburger-active');
    logo.classList.toggle('promo__logo-active');
    promoNav.classList.toggle('promo__nav-active');
    header.classList.toggle('promo__header-active');
    promoMenu.classList.toggle('promo__menu-active');
    phone.classList.toggle('promo__phone-active');
    phoneBtn.classList.toggle('button__promo-active');
    for(let link of promoLink) {
        link.classList.toggle('promo__link-active');
      }
};

for(let link of promoLink) {
    link.addEventListener('click', toggleMenu);
  }

burgerBtn.addEventListener('click', () => {
    toggleMenu();
});

//smoothScroll

const linkHead = document.querySelectorAll('.promo__link');

linkHead.forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();

      const ID = e.target.getAttribute('href').substr(1);

      document.getElementById(ID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});


//  tabs

const tabs = (wrapperSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
  const wrapper = document.querySelector(wrapperSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

        console.log(tab);

  function hideTabContent() {
      content.forEach(item => {
          item.style.display = 'none';
      });

      tab.forEach(item => {
          item.classList.remove(activeClass);
      });
  }

  function showTabContent(i = 0) {
      content[i].style.display = display;
      tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  wrapper.addEventListener('click', (e) => {
      const target = e.target;
      if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
          tab.forEach((item, i) => {
              if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
              }
          });
      }
  });
};

tabs('.price__tabs', '.price__tab', '.price__wrapper', 'price__tab_active');

// select

const select = (selectListSelector, contentSelector, display = 'block') => {
    const content = document.querySelectorAll(contentSelector),
          selectList =document.querySelector(selectListSelector);

          console.log(selectList)
    
    selectList.addEventListener('change', (e) => {
        content.forEach((item, i) => {
            item.style.display = 'none';

            if (item.id === event.target.value) {
                content[i].style.display = display;
            }
        })
    })
}

select('.price__select_items', '.price__wrapper');
