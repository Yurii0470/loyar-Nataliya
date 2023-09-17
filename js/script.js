'use strict';

document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('form');
  form.addEventListener('submit', formSend)
  
  async function formSend(event) {
    event.preventDefault();

    let error = formValidate(form);
  
    let formData = new FormData(form);
    
    if (error === 0) {
      
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.massage);
        form.reset();
      } else {
        alert('Помилка')
      }
    }
  };
});

const mobileMenu = document.querySelector('.mobile-menu'),
      nav = document.querySelector('.nav'),
      navItem = document.querySelectorAll('.nav__item');

mobileMenu.addEventListener('click', () => {
  mobileMenu.textContent == 'menu'? mobileMenu.textContent = 'close': mobileMenu.textContent = 'menu';
  mobileMenu.textContent == 'close'? nav.classList.add('nav__mobile-open'): nav.classList.remove('nav__mobile-open');
});

navItem.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.textContent = 'menu';
    nav.classList.remove('nav__mobile-open');
  });
});


const acc = document.querySelectorAll('.accordion');
const panel = document.querySelector('.panel');

acc.forEach(accButton => {
  accButton.addEventListener('click', function() {
    accButton.nextElementSibling.style.maxHeight === '0px'? accButton.nextElementSibling.style.maxHeight = '532px': accButton.nextElementSibling.style.maxHeight = '0px';
    accButton.nextElementSibling.hasAttribute('hidden')? accButton.nextElementSibling.removeAttribute('hidden'): accButton.nextElementSibling.setAttribute('hidden', '');
  });
});