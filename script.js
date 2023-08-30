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

let windowSize = 0
let shownArray = []
let notShownArray = []
let defaultHeight = 0
portfolioLink.forEach((item) => {
  item.addEventListener('click', () => {
    shownArray = []
    notShownArray = []
    gridItem.forEach((element) => {
      if (item.attributes['data-filter'].value === 'all') {
        // element.style.flex = '1 1 auto'
        element.style.opacity = '1'
        element.style.transitionProperty = 'opacity, transform'
        element.style.transitionDuration = '0.4s'
        element.style.transform = 'translate3d(0px, 0px, 0px)'
        element.style.order = '1'
        element.style.width = '550px'
        shownArray.push('true')
      } else {
        if (element.classList.contains(item.attributes['data-filter'].value)) {
          // element.style.flex = '1 1 auto'
          element.style.opacity = '1'
          element.style.transitionProperty = 'opacity, transform'
          element.style.transitionDuration = '0.4s'
          element.style.transform = 'translate3d(0px, 0px, 0px)'
          element.style.order = '1'
          element.style.width = '550px'
          shownArray.push(element)
        } else {
          element.style.opacity = '0'
          element.style.transitionProperty = 'opacity, transform'
          element.style.transitionDuration = '0.4s'
          element.style.transform = 'translate3d(-759px, 0px, 0px)'
          element.style.width = '550px'
          // element.style.flex = '0 0 0'
          element.style.order = '100'
          notShownArray.push('false')
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

    window.addEventListener('resize', () => {
      windowSize = window.innerWidth
      if (shownArray.length === 0) {
        portfolioGrid.style.height = `50px`
      } else if (shownArray.length > 1) {
        if (shownArray.length < 3) {
          defaultHeight = shownArray[0].offsetHeight
          if (windowSize >= 1200) {
            portfolioGrid.style.height = `calc(${defaultHeight}px)`
          } else {
            portfolioGrid.style.height = `calc(${defaultHeight * 2}px)`
          }
        } else {
          defaultHeight = shownArray[0].offsetHeight
          if (windowSize >= 1200) {
            portfolioGrid.style.height = `${
              Math.ceil(shownArray.length / 2) * 240
            }px`
          } else {
            portfolioGrid.style.height = `calc(${
              defaultHeight * shownArray.length
            }px)`
          }
        }
      } else {
        shownArray[0].style.width = '100%'
        defaultHeight = shownArray[0].offsetHeight
        portfolioGrid.style.height = `calc(${defaultHeight}px)`
      }
    })

    if (shownArray.length === 0) {
      portfolioGrid.style.height = `50px`
    } else if (shownArray.length > 1) {
      if (shownArray.length < 3) {
        defaultHeight = shownArray[0].offsetHeight
        if (windowSize >= 1200) {
          portfolioGrid.style.height = `calc(${defaultHeight}px)`
        } else {
          portfolioGrid.style.height = `calc(${defaultHeight * 2}px)`
        }
      } else {
        defaultHeight = shownArray[0].offsetHeight
        if (windowSize >= 1200) {
          portfolioGrid.style.height = `${
            Math.ceil(shownArray.length / 2) * 240
          }px`
        } else {
          portfolioGrid.style.height = `calc(${
            defaultHeight * shownArray.length
          }px)`
        }
      }
    } else {
      shownArray[0].style.width = '100%'
      defaultHeight = shownArray[0].offsetHeight
      portfolioGrid.style.height = `calc(${defaultHeight}px)`
    }
  })
})

// Hero - Type

// function typeWriter() {
//   while (jIndex < words.length) {
//     while (index < words[jIndex].length) {
//       typeText.innerHTML += words[jIndex].charAt(index)
//       index++
//     }
//     setTimeout(typeWriter, speed)
//     typeText.innerHTML = ''
//     console.log(jIndex)
//     jIndex++
//   }
// }

// function clearTypeWriter() {
//   if (index > words[jIndex].length) {
//     setInterval(function () {
//       typeText.innerHTML -= words[jIndex].charAt(index)
//       index--
//     }, 100)
//   }

//   jIndex++
//   typeWriter()
// }

// function typeWriter() {
//   if (jIndex < words.length) {
//     if (index < words[jIndex].length) {
//       setInterval(function () {
//         typeText.innerHTML += words[jIndex].charAt(index)
//         index++
//       }, 800)
//     }
//   } else {
//     jIndex = 0
//   }
//   setTimeout(clearTypeWriter, 2200)
// }

const words = ['Javascript', 'React', 'HTML / CSS', 'Express', 'Node-JS']
let phrase = []
const typeText = document.querySelector('.type')
const heroTagline = document.querySelector('.hero-tagline')
const speed = 1000
let index = 0
let jIndex = 0
let isDeleting = false
let isEnd = false

function typeWriter() {
  isEnd = false
  typeText.style.setProperty('--animationFX', 'none')
  heroTagline.style.setProperty('--bounceSFX', 'none')
  typeText.innerHTML = phrase.join('')
  if (index < words.length) {
    if (!isDeleting && jIndex <= words[index].length) {
      phrase.push(words[index][jIndex])
      jIndex++
    }

    if (isDeleting && jIndex <= words[index].length) {
      phrase.pop()
      jIndex--
    }
    if (jIndex === words[index].length) {
      isDeleting = true
    }
    if (isDeleting && jIndex === words[index].length - 1) {
      isEnd = true
      typeText.style.setProperty('--animationFX', 'blink 1s linear infinite')
      heroTagline.style.setProperty('--bounceSFX', 'bounce 2s')
    }
  } else if (index >= words.length) {
    index = 0
  }
  if (isDeleting && phrase.length === 0) {
    j = 0
    isDeleting = false
    phrase = []
    index++
  }

  const speedUp = Math.random() * (100 - 50) + 50
  const normalSpeed = Math.random() * (200 - 100) + 100
  const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed
  setTimeout(typeWriter, time)
}

typeWriter()
