//
// DONT FORGET:
// smooth scrolling
// links to demo popups
// navigation links
// structured js file
// Logo color
// book now button inside of the popup
// lazyloading
//

const myBtn = document.querySelector('#kkk');
const back = document.querySelector('#popup');
const popup = document.querySelector('.popup__content');
const close = document.querySelector('.popup__close');
const sectionAbout = document.querySelector('#section-about');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.navigation-mobile');
const toursSection = document.querySelector('#section-tours');
const navLogo = document.querySelector('.navigation__logo');

// popup handlers start ///////////////////////////////
toursSection.addEventListener('click', e => {
  if (e.target.classList.value.includes('btn-popup')) {
    back.classList.toggle('popup--visible');
    popup.classList.toggle('popup__content--visible');
  }
});

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
// popup handlers end ///////////////////////////////

// burger button handler start ///////////////////////////////
burger.addEventListener('click', () => {
  mobileNav.classList.toggle('shown');
  burger.classList.toggle('burger--close');
});

// burger button handler end ///////////////////////////////

// Sticky nav start ///////////////////////////////
const obsCallback = entries => {
  const [entry] = entries;
  if (entry.isIntersecting === false) {
    navigation.classList.add('navigation--sticky');
    navLogo.src = './assets/Logo/LogoLongBlack.png';
  } else {
    navigation.classList.remove('navigation--sticky');
    navLogo.src = './assets/Logo/Logo1.png';
  }
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const headerObserver = new IntersectionObserver(obsCallback, obsOptions);
headerObserver.observe(header);
// sticky nav end ///////////////////////////////
