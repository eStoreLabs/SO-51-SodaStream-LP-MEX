(function () {
    const products = document.querySelector('.es-products');
    const placeholder = document.createElement('div');
    const offset = products.offsetTop;

    placeholder.style.height = products.offsetHeight + 'px';

    window.addEventListener('scroll', () => {
        if (window.scrollY > offset) {
            if (!products.classList.contains('fixed')) {
                products.classList.add('fixed');
                products.style.position = 'fixed';
                products.style.top = '0';
                products.parentNode.insertBefore(placeholder, products);
            }
        } else {
            if (products.classList.contains('fixed')) {
                products.classList.remove('fixed');
                products.style.position = 'static';
                if (placeholder.parentNode) {
                    placeholder.parentNode.removeChild(placeholder);
                }
            }
        }
    });
})()