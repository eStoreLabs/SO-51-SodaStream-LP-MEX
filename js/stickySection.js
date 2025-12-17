(function () {
    const products = document.querySelector('.es-products');
    const placeholder = document.createElement('div');
    const offset = products.offsetTop;
    const mq = window.matchMedia('(min-width: 1034px)');

    placeholder.style.height = products.offsetHeight + 'px';

    function resetSticky() {
        products.classList.remove('fixed');
        products.style.position = 'static';
        products.style.top = '';
        if (placeholder.parentNode) {
            placeholder.parentNode.removeChild(placeholder);
        }
    }

    window.addEventListener('scroll', () => {
        if (!mq.matches) {
            resetSticky();
            return;
        }

        if (window.scrollY > offset) {
            if (!products.classList.contains('fixed')) {
                products.classList.add('fixed');
                products.style.position = 'fixed';
                products.style.top = '0';
                products.parentNode.insertBefore(placeholder, products);
            }
        } else {
            resetSticky();
        }
    });

    mq.addEventListener('change', e => {
        if (!e.matches) {
            resetSticky();
        }
    });
})();