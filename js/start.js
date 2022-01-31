function PersentCircle(selector,percent) {
    var circle = document.querySelector(selector);
    var circumference = circle.getTotalLength();
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
    var offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
    }
    setProgress(percent);
}

function headerscroll() {
    const getBlocksMap = getBlocks()
    const sectionow = getsection(getBlocksMap)
    const sectionowlink = sectionow.parentNode
    if (!sectionowlink.classList.contains('header__menu_active')) {
      getBlocksMap.forEach((value,key) => {
        const link = key
        if (link.parentNode.classList.contains('header__menu_active')) {
            link.parentNode.classList.remove('header__menu_active')
        }
      })
      sectionowlink.classList.add('header__menu_active')
    }
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  function getsection(getBlockMap) {
    var max = 0
    var maxi
    getBlockMap.forEach((key,value) => {
      if (window.pageYOffset >= key && key >= max) {
          maxi = value
          max = key
      }
    })
    return maxi
  }
  function getBlocks() {
    const links = document.querySelectorAll('a[data-goto]')
    var result = new Map()
    links.forEach(link => {
      if ((link.getAttribute('data-goto')) && (document.querySelector(link.getAttribute('data-goto')))) {
        const gotoBlock = document.querySelector(link.getAttribute('data-goto'))
        var gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight
        if (gotoBlockValue < 0) {
          gotoBlockValue = 0
        }
  
        result.set(link,Math.floor(gotoBlockValue))
      }
    })
    return result
  }