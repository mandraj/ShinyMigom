const animate = () => {
    const animation = (itemClass, animateClass) => {
        const animItems = document.querySelectorAll(itemClass);

        if (animItems.length > 0) {
            window.addEventListener('scroll', animOnScroll);
            function animOnScroll() {
                for (let i = 0; i < animItems.length; i++) {
                    const animItem = animItems[i];
                    const animItemHeight = animItem.offsetHeight;
                    const animItemOffset = offset(animItem).top;
                    const animStart = 15;
                    let animItemPoint = window.innerHeight - animItemHeight / animStart;

                    if (animItemHeight > window.innerHeight) {
                        animItemPoint = wondow.innerHeight - window.innerHeight / animStart;
                    }

                    if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                        animItem.classList.add(animateClass);
                    }
                }
            }
            function offset(el) {
                const rect = el.getBoundingClientRect(),
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return { top: rect.top + scrollTop}
            }
        }
    }
    animation('.advantages__image', 'advantages__image_animated');
    animation('.cards__item_four', 'cards__item_four_animated');
    animation('.cards__item_third', 'cards__item_third_animated');
    animation('.cards__item_second', 'cards__item_second_animated');
    animation('.cards__item_first', 'cards__item_first_animated');
    animation('.regal__list', 'regal__list_animated');
    animation('.advantages__list-right', 'advantages__list-right_animated');
    animation('.advantages__list-left', 'advantages__list-left_animated');
    animation('.works__image', 'works__image_animated');
    animation('.works__list', 'works__list_animated');
}

export default animate;