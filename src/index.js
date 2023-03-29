var img = document.querySelector('img');
var proof = document.querySelector('#proof');
var betting = document.querySelector('#betting');
var premium = document.querySelector('#premium');
var winner = document.querySelector('#winner');
img.addEventListener('click',function(){
    window.open('https://freebitco.in/?r=38406125',"_blank")
})
proof.addEventListener('click',function(){
    window.open('https://freebitco.in/?r=38406125',"_blank")
})
betting.addEventListener('click',function(){
    window.open('https://freebitco.in/?r=38406125',"_blank")
})
premium.addEventListener('click',function(){
    window.open('https://freebitco.in/?r=38406125',"_blank")
})
winner.addEventListener('click',function(){
    window.open('https://freebitco.in/?r=38406125',"_blank")
})

var ul = document.querySelector('ul')
// window.matchMedia('max-width:700')
var menu = document.querySelector('.menu');
menu.addEventListener('click',function(){
    if(menu.innerHTML == 'close'){
        menu.innerHTML="menu"
        ul.style.visibility="hidden"
        ul.style.transition = '0.2s'
    }else{
        menu.innerHTML = "close"
        ul.style.visibility="visible"
        ul.style.transition = '0.2s'

    }
})

