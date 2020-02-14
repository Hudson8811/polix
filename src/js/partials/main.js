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
