const headerMenu = document.querySelectorAll('.menu')
const headerMenuLinks = document.querySelectorAll('.menu__link')
const formAuth = document.querySelector('.form-auth')
const formClose = formAuth.querySelector('.form-auth__close')
const ActiveLink = document.querySelector('.menu__link_active')
headerMenuLinks.forEach(function(link){
    if (link.querySelector('a').hasAttribute('href') && link.querySelector('a').getAttribute('href') == '#form-auth') {
        const formLink = link
        link.addEventListener('click',function(e){
            e.preventDefault()
            formAuth.classList.add('_opened')
            document.querySelector('body').classList.toggle('locked')
            SetAuthActive(ActiveLink,formLink)
        })
        formClose.addEventListener('click',function(e){
            formAuth.classList.remove('_opened')
            document.querySelector('body').classList.toggle('locked')
            SetAuthActive(ActiveLink,formLink)
        })
    }
})


function SetAuthActive(ActiveLink,link) {
    ActiveLink.classList.toggle('menu__link_active')
    link.classList.toggle('menu__link_active')
}