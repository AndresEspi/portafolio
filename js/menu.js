const menuToggle = document.querySelector('.button');
const menuItems = document.querySelector('.options');
const closeButton = document.querySelector('.close-button1');
const menuLinks = document.querySelectorAll('.menuDisplay a');

menuToggle.addEventListener('click', () => {
  menuItems.classList.toggle('active');

  if (menuItems.classList.contains('active')) {
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.height = '';
    document.body.style.overflow = '';
  }
});

closeButton.addEventListener('click', () => {
  menuItems.classList.remove('active');
  document.body.style.height = '';
  document.body.style.overflow = '';
});

menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = link.getAttribute('href');
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      menuItems.classList.remove('active');
      document.body.style.height = '';
      document.body.style.overflow = '';
    }
  });
});

const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailField = document.getElementById('email');
  const isEmailValid = emailField.value.trim() !== '';
  const isEmailToLowerCase = emailField.value === emailField.value.toLowerCase();
  if (isEmailValid && isEmailToLowerCase) {
    document.querySelector('form p').style.display = 'none';
    this.submit();
  } else {
    document.querySelector('form p').style.display = 'inline';
  }
});
