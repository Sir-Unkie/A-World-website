//
// DONT FORGET:
// smooth scrolling
// links to demo popups
// navigation links
// sticky nav
// images quality
// structured js file
// popup opening on button clicks with js not css
// Logo color
// lazyloading
//

const myBtn = document.querySelector('#kkk');
const back = document.querySelector('#popup');
const popup = document.querySelector('.popup__content');
const close = document.querySelector('.popup__close');
const sectionAbout = document.querySelector('#section-about');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('.header');

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

// Sticky nav
const obsCallback = entries => {
  const [entry] = entries;
  if (entry.isIntersecting === false) {
    navigation.classList.add('navigation--sticky');
  } else {
    navigation.classList.remove('navigation--sticky');
  }
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const headerObserver = new IntersectionObserver(obsCallback, obsOptions);
headerObserver.observe(header);
