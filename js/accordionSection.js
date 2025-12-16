(function () {
    const root = document.querySelector('#es-rc-content');
    if (!root) return;

    const accTab = root.querySelectorAll('.es-acc-tab');
    for (let i = 0; i < accTab.length; i++) {
        accTab[i].addEventListener('click', function () {
            this.classList.add('active');
            let accTabContent = this.nextElementSibling;

            const hideContent = () => {
                accTabContent.style.maxHeight = null;
                this.classList.remove('active');
            };

            const showContent = () => {
                accTabContent.style.maxHeight = accTabContent.scrollHeight + 'px';
                this.classList.add('active');
            };

            if (accTabContent.style.maxHeight) {
                hideContent();
            } else {
                showContent();
            }
        });
    }
})();