(() => {
    window.toggleSection = function (sectionId) {
        console.log("HERE");
        console.log({ sectionId, self: this });

        const content = document.getElementById(sectionId);
        const arrow = this;

        if (!content) return;

        content.classList.toggle('show');

        arrow.innerHTML = content.classList.contains('show')
            ? '&#9650;'
            : '&#9660;';
    };
})();
