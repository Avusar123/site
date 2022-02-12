var body = document.querySelector('body')
var tabs = document.querySelectorAll('.tab')
var sidebar = document.querySelector('.sidebar')
var tab_links = document.querySelectorAll('.recommended__items > a')
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

var newSlider = new Swiper('.news-slider',{
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});