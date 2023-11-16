const menu = document.querySelector('.menu');
const menu_bg = document.querySelector('.menu_bg');
const body = document.querySelector('body');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  menu_bg.classList.toggle('active');

  if (body.classList.contains('hidden')) {
    body.classList.remove('hidden');
  } else {
    body.classList.add('hidden');
  }

});

const modal_btn = document.querySelector('.modal_btn');
const modal_wrapper = document.querySelector('.modal_wrapper');
const modal = document.querySelector('.main_modal');

modal_btn.addEventListener('click', () => {
  modal.classList.toggle('active');
  modal_wrapper.classList.toggle('active')
});

modal_wrapper.addEventListener('click', () => {
  modal.classList.remove('active');
  modal_wrapper.classList.remove('active')
});


const language = document.querySelector('.language');
const language_btn = document.querySelector('.language_btn');
const language_btn_name = document.querySelector('.language_btn_name');
const language_down = document.querySelectorAll('.language .language_down button');

language_btn.addEventListener('click', () => {
  language.classList.toggle('active');
});

language_down.forEach(btn => {
  btn.addEventListener('click', () => {
    language_btn_name.innerText = btn.textContent;

    language.classList.remove('active');
  })
})


try {

  let swiper1 = new Swiper(".licensesSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".licenses_right_btn",
      prevEl: ".licenses_left_btn",
    },
    breakpoints: {
      250: {
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

  var swiper2 = new Swiper(".newsSlider", {
    slidesPerView: 4,
    spaceBetween: 24,
    breakpoints: {
      250: {
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

  var swiper3 = new Swiper(".homeSlider", {
    pagination: {
      el: ".home_slider_pagination",
      clickable: true,
    },
  });

  var swiper4 = new Swiper(".partenrsSlider", {
    slidesPerView: 6,
    spaceBetween: 24,
    breakpoints: {
      250: {
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
      nextEl: ".partners_btn_right",
      prevEl: ".partners_btn_left",
    },
  });

  const accardion_btn = document.querySelectorAll(".accardion_btn");

  accardion_btn.forEach(accardion_btn => {
    accardion_btn.addEventListener("click", event => {
      accardion_btn.classList.toggle("active");
      const accordionItemBody = accardion_btn.nextElementSibling;
      if (accardion_btn.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      }
      else {
        accordionItemBody.style.maxHeight = 0;
      }
    });

  });

}
catch {

}


