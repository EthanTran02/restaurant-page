import './style.css'
import Initialize from './modules/initialize'
import Menu from './modules/menu'
import About from './modules/about'

const home = document.getElementById('home')
const menu = document.getElementById('menu')
const about = document.getElementById('about')

const content = document.getElementById('content')
const button = document.querySelectorAll('button')

// Add event for navigation button
home.addEventListener ('click', () => {
    button.forEach(button => {
        button.style.backgroundColor = 'white'
        button.style.color = 'black'
    }) 
    content.innerHTML = ''
    Initialize()
}) 

menu.addEventListener('click', () => {
    button.forEach(button => {
        button.style.backgroundColor = 'white'
        button.style.color = 'black'
    }) 
    content.innerHTML = ''
    Menu()
})

about.addEventListener('click', () => {
    button.forEach(button => {
        button.style.backgroundColor = 'white'
        button.style.color = 'black'
    }) 
    content.innerHTML = ''
    About()
})

Initialize()