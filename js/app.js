var swiper = new Swiper(".licensesSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".licenses_right_btn",
      prevEl: ".licenses_left_btn",
    },
    breakpoints: {
        800: {
          slidesPerView: 1,
        },
        1000: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
});

var swiper = new Swiper(".newsSlider", {
  slidesPerView: 4,
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".right_btn",
    prevEl: ".left_btn",
  },
});

var swiper = new Swiper(".homeSlider", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".partenrsSlider", {
  slidesPerView: 6,
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const accardion_btn = document.querySelectorAll(".accardion_btn");

accardion_btn.forEach(accardion_btn => {
  accardion_btn.addEventListener("click", event => {
    accardion_btn.classList.toggle("active");
     const accordionItemBody = accardion_btn.nextElementSibling;
     if(accardion_btn.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
   });
   
});

