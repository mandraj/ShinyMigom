
const burger = () => {
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
        phoneBtn.addEventListener('click', toggleMenu);
    };


    for(let link of promoLink) {
        link.addEventListener('click', toggleMenu);
    }

    burgerBtn.addEventListener('click', () => {
        toggleMenu();
    });
}

export default burger;