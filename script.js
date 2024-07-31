document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navbarActions = document.querySelector('.navbar-actions');

  hamburger.addEventListener('click', function () {
    navbarMenu.classList.toggle('active');
    navbarActions.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var dropdownToggles = document.querySelectorAll('.dropdown-toggle')

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (event) {
      event.preventDefault()
      var dropdownMenu = this.nextElementSibling
      var isVisible = dropdownMenu.style.display === 'block'

      document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
        menu.style.display = 'none'
      })

      if (!isVisible) {
        dropdownMenu.style.display = 'block'
      }
    })
  })

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.navbar-item')) {
      document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
        menu.style.display = 'none'
      })
    }
  })
})
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

function showSlide(index) {
    slides.style.transition = 'transform 0.5s ease';
    slides.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : slides.children.length - 1;
    slides.style.transition = 'none';
    slides.style.transform = `translateX(-${index * 100}%)`;
    setTimeout(() => {
        slides.style.transition = 'transform 0.5s ease';
        showSlide(index);
    }, 10);
});

nextButton.addEventListener('click', () => {
    index = (index < slides.children.length - 1) ? index + 1 : 0;
    showSlide(index);
});

setInterval(() => {
    nextButton.click();
}, 4000);
