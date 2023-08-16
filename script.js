const nav = document.querySelector('.nav')
const body = document.querySelector('html')

window.addEventListener('scroll', () => {
  if (window.scrollY !== 0) {
    nav.classList.add('nav-white-bg')
  } else {
    nav.classList.remove('nav-white-bg')
  }
})
