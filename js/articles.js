let wrapper = document.querySelector('.wrapper')
var header = document.querySelector(".header");
var burger_menu = document.querySelector('.burger-menu')
var header = document.querySelector('.header')
var body = document.querySelector('body')
let pageSlider = new Swiper('.page',{
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",
    direction: 'vertical',
    slidesPerView: 'auto',
    slideToClickedSlide: false,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    mousewheel: {
        sensitivity: 1,
    },
    speed: 800,
    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'page__bullet',
        bulletActiveClass: 'page__bullet_active',
    },
    on: {
        init: function() {
            wrapper.classList.add('_loaded')
            setScrollType()
        },
        slideChange: function () {
        },
        resize: function() {
            setScrollType()
        }
    },
    init: false,
})
new Swiper('.posts-slider',{
    slidesPerView: 3,
    speed: 600,
    pagination: {
        el: '.posts-slider__pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.posts-slider__next',
        prevEl: '.posts-slider__prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
})
function setScrollType() {
    if (wrapper.classList.contains('_free')) {
        wrapper.classList.remove('_free');
        pageSlider.params.freeMode = false;
    }
    for (let index = 0; index < pageSlider.slides.length; index++) {
        const pageSlide = pageSlider.slides[index];
        const pageSlideContent = pageSlide.querySelector('.screen__content');
        if (pageSlideContent) {
            const pageSlideContentHeight = pageSlideContent.offsetHeight;
            if (pageSlideContentHeight > window.innerHeight) {
                wrapper.classList.add('_free');
                pageSlider.params.freeMode = {
                    enabled: true,
                    minimumVelocity: 0.5,
                    momentum: true,
                    momentumBounce: true,
                    momentumBounceRatio: 1,
                    momentumRatio: 0.2,
                    momentumVelocityRatio: 1,
                    sticky: false
                };
                break;
            }
        }
    }
}
pageSlider.init()
burger_menu.addEventListener('click',function(){
    header.classList.toggle('header-active')
    burger_menu.classList.toggle('burger-active')
    body.classList.toggle('locked')
})
