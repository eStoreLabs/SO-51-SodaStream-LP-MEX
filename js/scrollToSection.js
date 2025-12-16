(function () {
const headerOffset = 200;

document.querySelectorAll('.es-products__item').forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.dataset.target;
        const target = document.getElementById(targetId);

        if (target) {
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
})();