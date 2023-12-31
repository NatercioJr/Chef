let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener ('click', () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
})

window.addEventListener ('scroll', () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('open')
})

let darkmode = document.querySelector('#darkmode')

darkmode.addEventListener ('click', () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun')
        document.body.classList.add('dark')
    }else{
        darkmode.classList.replace('bx-sun', 'bx-moon')
        document.body.classList.remove('dark')
    }
})
