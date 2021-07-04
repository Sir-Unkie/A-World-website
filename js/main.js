//
// links to demo popups
//

const headerBtn = document.querySelector('#header-btn');
const backDemoPopup = document.querySelector('#popup-demo');
const back = document.querySelector('#popup-main');
const popupMainContent = back.querySelector('.popup__content');
const popupDemo = backDemoPopup.querySelector('.popup__content');
const closeMainPopup = back.querySelector('.popup__close');
const closeDemoPopup = backDemoPopup.querySelector('.popup__close');
const sectionAbout = document.querySelector('#section-about');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.navigation-mobile');
const toursSection = document.querySelector('#section-tours');
const navLogo = document.querySelector('.navigation__logo');
const btnDummy = document.querySelector('#read-stories');
const formSubmitBtn = document.querySelector('#form-submit');

// demo popup handlers start

formSubmitBtn.addEventListener('click', e => {
  e.preventDefault();
  console.log('asdasdasd');
  backDemoPopup.classList.toggle('popup--visible');
  popupDemo.classList.toggle('popup__content--visible');
});

btnDummy.addEventListener('click', e => {
  e.preventDefault();
  backDemoPopup.classList.toggle('popup--visible');
  popupDemo.classList.toggle('popup__content--visible');
});

closeDemoPopup.addEventListener('click', () => {
  backDemoPopup.classList.remove('popup--visible');
  popupDemo.classList.remove('popup__content--visible');
});

backDemoPopup.addEventListener('click', e => {
  if (e.target === backDemoPopup) {
    backDemoPopup.classList.remove('popup--visible');
    popupDemo.classList.remove('popup__content--visible');
  }
});

// demo popup handlers end

// popup handlers start ///////////////////////////////
toursSection.addEventListener('click', e => {
  if (e.target.classList.value.includes('btn-popup')) {
    back.classList.toggle('popup--visible');
    popupMainContent.classList.toggle('popup__content--visible');
  }
});

headerBtn.addEventListener('click', () => {
  back.classList.toggle('popup--visible');
  popupMainContent.classList.toggle('popup__content--visible');
});

closeMainPopup.addEventListener('click', () => {
  back.classList.remove('popup--visible');
  popupMainContent.classList.remove('popup__content--visible');
});

back.addEventListener('click', e => {
  if (e.target === back) {
    back.classList.remove('popup--visible');
    popupMainContent.classList.remove('popup__content--visible');
  }
});
// popup handlers end ///////////////////////////////

// popup book button start ///////////////////////////////
popupMainContent.addEventListener('click', e => {
  if (e.target.classList.value.includes('btn')) {
    back.classList.toggle('popup--visible');
    popupMainContent.classList.toggle('popup__content--visible');
  }
});
// popup book button end ///////////////////////////////

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
