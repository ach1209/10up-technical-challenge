import '../scss/styles.scss'

const menu = document.getElementById('menu')
let menuIcon = document.querySelector('.menu-icon')

menu.addEventListener('click', menuToggle)

function menuToggle(e) {
  e.stopPropagation()

  if (menuIcon.classList.contains('menu-icon--active')) {
    menuIcon.classList.remove('menu-icon--active')
    document.querySelector('.menu-list').removeAttribute('style')
  } else {
    menuIcon.classList.add('menu-icon--active')
    document.querySelector('.menu-list').style.display = 'block'
  }
}