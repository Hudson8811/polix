$(document).ready(function () {
  $(".js-mask").mask(" +7 (999) 999-99-99");

});


const phone = document.querySelector('.sh-call-me');
const bluBtn = document.querySelector('.btn--blue');
const bluBtnDefault = document.querySelector('.sh-btn-count-wrap');
const botContainer = document.querySelector('.bot-container');
const shStrengths = document.querySelector('.sh-strengths')
const mobWrapper = document.querySelector('.mobile-wrapper-for-sh-strengths')
const mobLitSpan = document.querySelector('.lit-span.mobile')
const mobBotSpan = document.querySelector('.bot-span.mobile')
const shTop = document.querySelector('.sh-top')
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
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: false,
  arrow: true,
  dots: true,
  responsive: [
    {
      breakpoint: 781,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
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
    mobWrapper.append(shStrengths)
  } else {
    botContainer.append(shStrengths)
  };
  if (document.documentElement.clientWidth < 1080) {
    phone.innerHTML = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5358 2.10738L16.5964 4.88406L15.7616 7.35235C15.601 7.82857 15.8347 8.34812 16.2977 8.54387L18.3108 9.39337C18.7469 9.57487 18.985 10.0478 18.8709 10.5062C18.6174 11.5166 18.4355 12.6798 16.753 15.5896C15.0706 18.4994 14.1579 19.2407 13.4097 19.9654C13.0697 20.2934 12.5411 20.3237 12.1659 20.0367L10.4237 18.718C10.0227 18.415 9.45591 18.4724 9.12376 18.8496L7.45654 20.7465L5.46854 23.0086C5.13016 23.3936 5.15378 23.9765 5.52218 24.3329L7.13718 25.8946C7.56823 26.3181 8.14575 26.5596 8.75001 26.569C10.7417 26.5808 14.8621 25.5867 19.6638 17.2698C24.4656 8.95294 23.2661 4.88803 22.26 3.16904C21.9497 2.65044 21.4518 2.27103 20.8695 2.1095L18.7095 1.49173C18.2167 1.35084 17.7001 1.62182 17.5358 2.10738Z"/>
    </svg>`;
  } else {
    phone.innerHTML = `Заказать звонок`;
  };

  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth < 780) {
      mobWrapper.append(shStrengths)
    } else {
      botContainer.append(shStrengths)
    };
    if (document.documentElement.clientWidth < 1080) {
      phone.innerHTML = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5358 2.10738L16.5964 4.88406L15.7616 7.35235C15.601 7.82857 15.8347 8.34812 16.2977 8.54387L18.3108 9.39337C18.7469 9.57487 18.985 10.0478 18.8709 10.5062C18.6174 11.5166 18.4355 12.6798 16.753 15.5896C15.0706 18.4994 14.1579 19.2407 13.4097 19.9654C13.0697 20.2934 12.5411 20.3237 12.1659 20.0367L10.4237 18.718C10.0227 18.415 9.45591 18.4724 9.12376 18.8496L7.45654 20.7465L5.46854 23.0086C5.13016 23.3936 5.15378 23.9765 5.52218 24.3329L7.13718 25.8946C7.56823 26.3181 8.14575 26.5596 8.75001 26.569C10.7417 26.5808 14.8621 25.5867 19.6638 17.2698C24.4656 8.95294 23.2661 4.88803 22.26 3.16904C21.9497 2.65044 21.4518 2.27103 20.8695 2.1095L18.7095 1.49173C18.2167 1.35084 17.7001 1.62182 17.5358 2.10738Z"/>
      </svg>`;
    } else {
      phone.innerHTML = `Заказать звонок`;
    };
  });
});

function modalPhone() {
  event.preventDefault();
  $.fancybox.open({
    src: '#modalPhone',
    type: 'inline'
  });
}

function modalKM() {
  event.preventDefault();
  $.fancybox.open({
    src: '#modalKM',
    type: 'inline'
  });
}

function modalFreeKM() {
  event.preventDefault();
  $.fancybox.open({
    src: '#modalFreeKM',
    type: 'inline'
  });
}


function modalOrder() {
  event.preventDefault();
  $.fancybox.open({
    src: '#modalOrder',
    type: 'inline'
  });
}

function modalDoc() {
  event.preventDefault();
  $.fancybox.open({
    src: '#modalDoc',
    type: 'inline'
  });
}

function modalProduct() {
  event.preventDefault();
  $.fancybox.open({
    src: '#modalProduct',
    type: 'inline'
  });
}

function modalReview() {
  event.preventDefault();
  $.fancybox.open({
    src: '#modalReview',
    type: 'inline'
  });
}

function modalPolit() {
  event.preventDefault();
  $.fancybox.open({
    src: '#modalPolit',
    type: 'inline'
  });
}

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70)
      $('.sh-top').addClass('fix');
    else
      $('.sh-top').removeClass('fix');
  });
});
var fileInpWrap = $('.file-input-wrap');
if (fileInpWrap.length > 0) {
  fileInpWrap.each(function () {
    var surveyUploadFileInput = $(this).find('.survey__file');
    var jqUploadedInput = $(this).find(".survey__file-upload-choosed");
    var plusBB = $(this).find(".plus-btn-block");
    var jqLabel = $(this).find(".survey__file-upload");


    surveyUploadFileInput.change(function (e) {
      var targetValue = surveyUploadFileInput[0].files[0].name;
      jqUploadedInput.html('<span>' + targetValue + '</span><div class="survey__file-upload-close-btn"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2847 15.1421L1.14258 1" stroke="#2a68fb"/><path d="M1.00044 15.1421L15.1426 1" stroke="#2a68fb"/></svg></div> ');

      if (jqUploadedInput.hasClass("survey__file-upload-choosed-show") || surveyUploadFileInput[0].value === "") {

      }
      else {
        jqUploadedInput.toggleClass("survey__file-upload-choosed-show");
        plusBB.toggleClass("survey__file-upload-hide");
      }
    });

    jqUploadedInput.on("click", ".survey__file-upload-close-btn", function () {
      if (jqUploadedInput.hasClass("survey__file-upload-choosed-show")) {
        surveyUploadFileInput.value = "";

        jqUploadedInput.toggleClass("survey__file-upload-choosed-show");
        plusBB.toggleClass("survey__file-upload-hide");
      }
    });
  });
}




$(document).ready(function () {
  const cercleWrapp = document.querySelector('.progress-ring')
  const circle = cercleWrapp.querySelector('.progress-ring__circle');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  const responsive2 = document.querySelector('.responsive-2')
  const clickDots = responsive2.querySelector('.slick-dots')
  let slickActive = clickDots.querySelector('.slick-active')
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;

  $('.responsive-2').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    cercleWrapp.style.display = 'none';
  });

  $('.responsive-2').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    cercleWrapp.style.display = 'block';
    slickActive = clickDots.querySelector('.slick-active')
    slickActive.append(cercleWrapp)
    percent = ((currentSlide) / (slick.slideCount - 1)) * 100;
    const offset = circumference - percent / 100 * circumference;
    function inOffset(offset) {
      circle.style.strokeDashoffset = offset
    }
    setTimeout(inOffset, 0, offset)
  });

});
