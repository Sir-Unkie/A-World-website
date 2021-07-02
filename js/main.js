const myBtn = document.querySelector('#kkk');
const back = document.querySelector('#popup');
const popup = document.querySelector('.popup__content');
const close = document.querySelector('.popup__close');

myBtn.addEventListener('click', () => {
  back.classList.toggle('popup--visible');
  popup.classList.toggle('popup__content--visible');
});
close.addEventListener('click', () => {
  back.classList.remove('popup--visible');
  popup.classList.remove('popup__content--visible');
});
back.addEventListener('click', e => {
  if (e.target === back) {
    back.classList.remove('popup--visible');
    popup.classList.remove('popup__content--visible');
  }
});
