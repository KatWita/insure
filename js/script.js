const nav = document.querySelector('.nav')
const btnBurger = document.querySelector('.nav__burger')
const navLinks = document.querySelectorAll('.nav__link')
const btnNav = document.querySelector('.btn-view--nav')

const toggleNav = () => {
	nav.classList.toggle('show')
	document.body.classList.toggle('lock-scroll')
}

btnBurger.addEventListener('click', toggleNav)
btnNav.addEventListener('click', toggleNav)
navLinks.forEach(link => link.addEventListener('click', toggleNav))
