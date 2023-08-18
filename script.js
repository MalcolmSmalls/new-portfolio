const header = document.querySelector('header')
const hamburger = document.querySelector('.nav-hamburger')
const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.nav-link')

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
