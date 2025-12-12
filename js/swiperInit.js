(() => {
  const root = document.querySelector("#es-rc #es-rc-content");
  if (!root) return;

  const nextBtn = root.querySelector(".es-swiper-button-next");
  const prevBtn = root.querySelector(".es-swiper-button-prev");

  const swiper = new Swiper(root.querySelector(".es-swiper"), {
    direction: "horizontal",
    loop: false,
    autoHeight: true,

    navigation: {
      nextEl: root.querySelector(".es-swiper-button-next"),
      prevEl: root.querySelector(".es-swiper-button-prev"),
    },

    on: {
      slideChange: function () {
        nextBtn.style.display = "none";
        prevBtn.style.display = "none";
        if (this.activeIndex === 0) {
          nextBtn.style.display = "";
        }
        if (this.activeIndex === 1) {
          prevBtn.style.display = "";
        }
      },
    },
  });
  swiper.emit("slideChange");
})();
