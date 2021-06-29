var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 30,
        stretch: 1,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,

    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    }
});