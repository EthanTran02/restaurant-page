import food1 from '../images/food1.jpg'; 
import food2 from '../images/food2.jpg'; 
import food3 from '../images/food3.jpg'; 

export default function Menu() {
    const Button = document.getElementById('menu')
    const Heading = document.createElement('h1')
    const description = document.createElement('p')
    const content = document.getElementById('content')
    const menu = document.createElement('div')
    const menuItem1 = document.createElement('div')
    const menuItem2 = document.createElement('div')
    const menuItem3 = document.createElement('div')

    // RESET BACKGROUND
    content.style.backgroundImage = ''
    content.style.padding = ''
    // ---------STYLE---------

    // Nav
    Button.style.backgroundColor = 'black'
    Button.style.color = 'white'

    // Text
    Heading.innerText = 'Our Menu'
    description.innerText = "We're delighted to offer you a delicious selection of dishes, crafted with fresh, high-quality ingredients and a passion for flavor. Whether you're looking for a casual meal, a romantic dinner, or a quick bite, we have something to satisfy every craving."
    Heading.style.textAlign = 'center'
    Heading.style.marginTop = '80px'
    description.style.textAlign = 'center'
    description.style.width = '50vw'
    description.style.margin = 'auto'
    description.style.marginBottom = '30px'

    // Menu
    menu.style.height = '250px'
    menu.style.display = 'flex'
    menu.style.gap = '42px'
    menu.style.width = '70%'
    menu.style.margin = 'auto'

    // Menu items
    menuItem1.style.flex = '1'
    menuItem1.style.height = '100%'
    menuItem1.style.borderRadius = '5px'
    menuItem1.style.backgroundImage = `url(${food1})`
    menuItem1.style.backgroundSize = 'cover'
    menuItem1.style.backgroundPosition = 'center'

    menuItem2.style.flex = '1'
    menuItem2.style.height = '100%'
    menuItem2.style.borderRadius = '5px'
    menuItem2.style.backgroundImage = `url(${food2})`
    menuItem2.style.backgroundSize = 'cover'
    menuItem2.style.backgroundPosition = 'bottom'
    
    menuItem3.style.flex = '1'
    menuItem3.style.height = '100%'
    menuItem3.style.borderRadius = '5px'
    menuItem3.style.backgroundImage = `url(${food3})`
    menuItem3.style.backgroundSize = 'cover'
    menuItem3.style.backgroundPosition = 'bottom'

    // Append child
    menu.appendChild(menuItem1)
    menu.appendChild(menuItem2)
    menu.appendChild(menuItem3)

    content.appendChild(Heading)
    content.appendChild(description)

    content.appendChild(menu)
}