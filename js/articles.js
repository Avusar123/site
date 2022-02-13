let wrapper = document.querySelector('.wrapper')
var header = document.querySelector(".header");
var burger_menu = document.querySelector('.burger-menu')
var header = document.querySelector('.header')
var body = document.querySelector('body')
let pageSlider = new Swiper('.page',{
    parallax: true,
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",
    direction: 'vertical',
    slidesPerView: 'auto',
    slideToClickedSlide: false,
    touchRatio: 0.7,
    spaceBetween: 50,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    mousewheel: {
        sensitivity: 1,
    },
    speed: 800,
    on: {
        init: function() {
            wrapper.classList.add('_loaded')
            setScrollType()
        },
        slideChange: function () {
            setScrollType()
        },
        resize: function() {
            setScrollType()
        }
    },
    init: false,
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
                    minimumVelocity: 0.02,
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
