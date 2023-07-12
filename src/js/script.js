const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__cross');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const   counters =document.querySelectorAll('.skills__measurement-degree'),
        lines = document.querySelectorAll('.skills__measurement-scale-full');

counters.forEach((item,i)=>{
    lines[i].style.width = item.innerHTML;
});
