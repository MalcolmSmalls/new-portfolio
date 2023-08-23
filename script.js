const header = document.querySelector('header')
const hamburger = document.querySelector('.nav-hamburger')
const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.nav-link')
const gridItem = document.querySelector('.grid-item')
const shuffleImg = document.querySelector('.shuffle-grid-img')
const shuffleContent = document.querySelector('.shuffle-grid-content')

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

gridItem.addEventListener('mouseover', () => {
  shuffleImg.classList.add('scale')
  shuffleContent.classList.add('reveal')
})

gridItem.addEventListener('mouseleave', () => {
  shuffleImg.classList.remove('scale')
  shuffleContent.classList.remove('reveal')
})
const Shuffle = window.Shuffle // Assumes you're using the UMD version of Shuffle (for example, from unpkg.com).
const element = document.getElementById('portfolio-list')
const sizer = element.querySelector('.js-shuffle-sizer')

const shuffleInstance = new Shuffle(element, {
  itemSelector: '.picture-item',
  sizer: sizer, // could also be a selector: '.js-shuffle-sizer'
})
