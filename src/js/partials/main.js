const phone = document.querySelector('.sh-call-me');
const bluBtn = document.querySelector('.btn--blue');
const bluBtnDefault = document.querySelector('.sh-btn-count-wrap');
const botContainer = document.querySelector('.bot-container');
const shStrengths = document.querySelector('.sh-strengths')
const mobWrapper = document.querySelector('.mobile-wrapper-for-sh-strengths')

$('.sh-burger').click(function () {
  $(this).toggleClass('sh-burger--active');
  $('#menu').toggleClass('active')
});



$(document).ready(function () {
  if (document.documentElement.clientWidth < 780) {
    botContainer.append(bluBtn)
    mobWrapper.append(shStrengths)
  } else {
    bluBtnDefault.append(bluBtn)
    botContainer.append(shStrengths)
  };

  if (document.documentElement.clientWidth < 1080) {
    phone.innerHTML = '<img src="img/phone.svg">';
  } else {
    phone.innerHTML = `<a class="sh-call-me">Заказать звонок</a>`;
  };

  window.addEventListener("resize", () => {

    if (document.documentElement.clientWidth < 1080) {
      phone.innerHTML = `<img src="img/phone.svg">`;
    } else {
      phone.innerHTML = `<a class="sh-call-me">Заказать звонок</a>`;
    };

    if (document.documentElement.clientWidth < 780) {
      botContainer.append(bluBtn)
      mobWrapper.append(shStrengths)
    } else {
      bluBtnDefault.append(bluBtn)
      botContainer.append(shStrengths)
    };
  });


});

