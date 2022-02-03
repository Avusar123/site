window.onscroll = slickscroll
var header = document.querySelector(".header");
var burger_menu = document.querySelector('.burger-menu')
var header = document.querySelector('.header')
var body = document.querySelector('body')
var tabs = document.querySelectorAll('.tab')
var sidebar = document.querySelector('.sidebar')
var tab_links = document.querySelectorAll('.recommended__items > a')
var attached__files = document.querySelector('.attached-files')
var attached__filesLink = document.querySelector('.attached-files__link')
tab_links.forEach(function(e){
    e.addEventListener('click',function(e){
        e.preventDefault()
        var target = e.target
        if (target.parentElement != document.querySelector('.recommended__items')) {
            target = target.closest('a')
        }
        tabs.forEach((e)=>{
            e.classList.remove('tab-item-active')
        })
        tab_links.forEach((e)=>{
            e.classList.remove('tab-active')
        })
        target.classList.add('tab-active')
        var tab_id = target.getAttribute('href')
        document.querySelector(tab_id).classList.add('tab-item-active')
    })
})
function slickscroll() {
    if (window.pageYOffset > header.offsetTop) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
}
burger_menu.addEventListener('click',function(){
    header.classList.toggle('header-active')
    burger_menu.classList.toggle('burger-active')
    body.classList.toggle('locked')
})
attached__filesLink.addEventListener('click',function(){
    attached__files.classList.toggle('attached-files-active')
})
new Swiper('.news-slider',{
    watchOverflow: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    thumbs: {
        swiper: {
            el: '.thumbs-slider',
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 5,
            spaceBetween: 10,
            slideToClickedSlide: false,
        }
    }
});