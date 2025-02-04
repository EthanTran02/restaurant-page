import './style.css'
import Initialize from './module/initialize'
import Menu from './module/menu'

const home = document.getElementById('home')
const menu = document.getElementById('menu')
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

Initialize()