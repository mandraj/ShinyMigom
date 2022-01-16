
const smoothScroll = () => {
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
}

export default smoothScroll;