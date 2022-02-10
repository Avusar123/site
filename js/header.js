var header = document.querySelector(".header");
var body = document.querySelector("body");
window.onscroll = headerscroll
function headerscroll() {
    const header = document.querySelector('header')
    if (window.pageYOffset > header.offsetTop) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
}
var burger_menu = document.querySelector('.burger-menu')
burger_menu.addEventListener('click',function(){
    header.classList.toggle('header-active')
    burger_menu.classList.toggle('burger-active')
    body.classList.toggle('locked')
})
headerscroll()