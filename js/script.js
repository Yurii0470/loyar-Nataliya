const acc = document.querySelectorAll('.accordion');
const panel = document.querySelector('.panel');

acc.forEach(accButton => {
  accButton.addEventListener('click', function() {
    accButton.nextElementSibling.style.maxHeight === '0px'? accButton.nextElementSibling.style.maxHeight = '532px': accButton.nextElementSibling.style.maxHeight = '0px';
    accButton.nextElementSibling.hasAttribute('hidden')? accButton.nextElementSibling.removeAttribute('hidden'): accButton.nextElementSibling.setAttribute('hidden', '');
  });
});