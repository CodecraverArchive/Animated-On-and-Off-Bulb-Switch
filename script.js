const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const body = document.querySelector('body');

btn.addEventListener('click', function(){
    body.classList.toggle('light_on');
});
btn1.addEventListener('click', function(){
    body.classList.toggle('light_on');
});