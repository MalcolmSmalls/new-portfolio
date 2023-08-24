const header = document.querySelector('header')
const hamburger = document.querySelector('.nav-hamburger')
const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.nav-link')
const gridItem = document.querySelectorAll('.grid-item')
const shuffleImg = document.querySelectorAll('.shuffle-grid-img')
const shuffleContent = document.querySelectorAll('.shuffle-grid-content')
const portfolioLink = document.querySelectorAll('.portfolio-link')
const node = document.querySelectorAll('.node')
const react = document.querySelectorAll('.react')
const portfolioGrid = document.querySelector('.shuffle-grid')

window.addEventListener('scroll', () => {
  if (window.scrollY !== 0) {
    header.classList.add('nav-white-bg')
  } else {
    nav.classList.remove('open-nav')
    header.classList.remove('nav-white-bg')
  }
})

hamburger.addEventListener('click', () => {
  header.classList.add('nav-white-bg')
  nav.classList.toggle('open-nav')

  if (window.scrollY === 0 && !nav.matches('.open-nav')) {
    header.classList.remove('nav-white-bg')
  }
})

const removeOpenNav = () => {
  nav.classList.remove('open-nav')
}

navLink.forEach((element) => {
  element.addEventListener('click', removeOpenNav)
})

gridItem.forEach((element) => {
  element.addEventListener('mouseover', () => {
    shuffleImg.forEach((item) => {
      if (item.classList.contains(`${element.classList[1]}`)) {
        item.classList.add('scale')
      }
    })
    shuffleContent.forEach((item) => {
      if (item.classList.contains(`${element.classList[1]}`)) {
        item.classList.add('reveal')
      }
    })
  })
})

gridItem.forEach((element) => {
  element.addEventListener('mouseleave', () => {
    shuffleImg.forEach((item) => {
      if (item.classList.contains(`${element.classList[1]}`)) {
        item.classList.remove('scale')
      }
    })
    shuffleContent.forEach((item) => {
      if (item.classList.contains(`${element.classList[1]}`)) {
        item.classList.remove('reveal')
      }
    })
  })
})

portfolioLink.forEach((item) => {
  item.addEventListener('click', () => {
    gridItem.forEach((element) => {
      if (item.attributes['data-filter'].value === 'all') {
        element.style.width = '550px'
        element.style.margin = '0em'
        element.style.height = '100%'
        element.style.order = '1'
        element.style.flex = '1 1 auto'
      } else {
        if (element.classList.contains(item.attributes['data-filter'].value)) {
          element.style.width = '550px'
          element.style.margin = '0em'
          element.style.height = '100%'
          element.style.order = '1'
          element.style.flex = '1 1 auto'
        } else {
          element.style.width = '0px'
          element.style.margin = '-1em'
          element.style.height = '0px'
          element.style.order = '100'
          element.style.flex = '0 0 0px'
        }
      }
    })
    portfolioLink.forEach((element) => {
      if (element === item) {
        element.classList.add('active-portfolio')
      } else {
        element.classList.remove('active-portfolio')
      }
    })
  })
})
