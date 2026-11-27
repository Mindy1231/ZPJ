const menuButton=document.querySelector('.menu');
const nav=document.querySelector('.topbar nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('mobile-open');menuButton.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('mobile-open');menuButton.setAttribute('aria-expanded','false');}));}
