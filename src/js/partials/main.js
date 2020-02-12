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

