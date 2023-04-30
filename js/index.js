// const slider = document.querySelector('.hero-list')

const mySwiper = new Swiper('.mySwiper', {
    // selector: slider,
    slidesPerView: 1,
    loop: true,
    speed: 5000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
});

// const heroList = document.querySelector('.hero-list');
// const heroItems = document.querySelectorAll('.hero-item');

// heroItems.forEach(item => {
//     item.style.backgroundSize = 'cover';
//     item.style.backgroundPosition = 'center';
// });

// let counter = 0;

// setInterval(() => {
//     heroList.style.transform = `translateX(-${counter * 100}%)`;

//     if(counter === heroItems.length - 1) {
//         counter = 0;
//     } else {
//         counter += 1;
//     }
// }, 3000);
  