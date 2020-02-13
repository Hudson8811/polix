const phone = document.querySelector('.sh-call-me');
const bluBtn = document.querySelector('.btn--blue');
const bluBtnDefault = document.querySelector('.sh-btn-count-wrap');
const botContainer = document.querySelector('.bot-container');
const shStrengths = document.querySelector('.sh-strengths')
const mobWrapper = document.querySelector('.mobile-wrapper-for-sh-strengths')
const mobLitSpan = document.querySelector('.lit-span.mobile')
const mobBotSpan = document.querySelector('.bot-span.mobile')

$('.sh-burger').click(function () {
  $(this).toggleClass('sh-burger--active');
  $('#menu').toggleClass('active')
});

$('.grid-item').click(function () {
  $(this).toggleClass('active')
});

$('.responsive').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 781,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.responsive-2').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  arrow: true,
  dots: true,
  responsive: [
    {
      breakpoint: 781,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.responsive-3').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  variableWidth: true,
  arrow: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
      }
    },
    {
      breakpoint: 781,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: false,
      }
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function () {
  if (document.documentElement.clientWidth < 780) {
    botContainer.append(bluBtn)
    mobWrapper.append(shStrengths)
    mobLitSpan.innerHTML = `т/мес`;
    mobBotSpan.innerHTML = `продукции производим`;
  } else {
    bluBtnDefault.append(bluBtn)
    botContainer.append(shStrengths)
    mobLitSpan.innerHTML = `т`;
    mobBotSpan.innerHTML = `металлокнструкций производим ежемесячно`;
  };

  if (document.documentElement.clientWidth < 1080) {
    phone.innerHTML = `<img src="img/phone.svg">`;
  } else {
    phone.innerHTML = `Заказать звонок`;
  };

  window.addEventListener("resize", () => {

    if (document.documentElement.clientWidth < 1080) {
      phone.innerHTML = `<img src="img/phone.svg">`;
    } else {
      phone.innerHTML = `Заказать звонок`;
    };

    if (document.documentElement.clientWidth < 780) {
      botContainer.append(bluBtn)
      mobWrapper.append(shStrengths)
      mobLitSpan.innerHTML = `т/мес`;
      mobBotSpan.innerHTML = `продукции производим`;
    } else {
      bluBtnDefault.append(bluBtn)
      botContainer.append(shStrengths)
      mobLitSpan.innerHTML = `т`;
      mobBotSpan.innerHTML = `металлокнструкций производим ежемесячно`;
    };
  });
});

