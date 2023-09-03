// const e = require('cors');

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
const headerLink = document.querySelectorAll('.header__link');
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
headerLink.forEach((link) => {
  link.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
  });
});

const items = document.querySelectorAll('.preferences__items');
const dot = document.querySelectorAll('.dot');

let speed = 3000;
let index = 0;

function startInterval() {
  setInterval(() => {
    index++;
    if (index === items.length) index = 0;
    updateContent();
  }, speed);
}
startInterval();

function updateContent() {
  items.forEach((item) => {
    item.classList.remove('active');
  });
  items[index].classList.add('active');
  dot.forEach((el) => {
    el.classList.remove('dot--fill');
  });
  dot[index].classList.add('dot--fill');
}
updateContent();

const request = 'https://visor.business/visor_v2/requests';

const postRequest = function (url) {
  fetch(url, { method: 'POST' }, 'no-cors')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
postRequest(request);
