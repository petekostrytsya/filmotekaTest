

const mySwiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    loop: true,
    speed: 5000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
});

// class MyImage {
//     constructor(url) {
//         this.url = url;
//     }
// }

// let myImage = new MyImage("./img/abstract-background-with-yellow-lines-2x.jpg");



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
  
// const body = document.querySelector('.hero-list');

// // Зображення для зміни фонового зображення
// const images = [
//   './img/abstract-background-with-red-lines-2x.jpg',
//   './img/abstract-background-with-yellow-lines-2x.jpg',
//   './img/abstract-background-with-orange-lines-2x.jpg',
// ];

// // Задаємо початковий індекс
// let currentIndex = 0;

// // Встановлюємо інтервал зміни фонового зображення
// setInterval(() => {
//   // Встановлюємо фонове зображення body
//   body.style.backgroundImage = `url(${images[currentIndex]})`;

//   // Інкрементуємо індекс
//   currentIndex += 1;

//   // Якщо індекс виходить за межі довжини масиву, перевстановлюємо його на 0
//   if (currentIndex === images.length) {
//     currentIndex = 0;
//   }
// }, 5000);



// let heroList = document.querySelector('.hero-list');
// let heroItems = document.querySelectorAll('.hero-item');
// let counter = 0;

// function slideHero() {
//     heroList.style.transform = 'translateX(' + (-100 * counter) + '%)';
//     counter++;
//     if (counter === heroItems.length) {
//         counter = 0;
//     }
// }

// let interval = setInterval(slideHero, 5000);