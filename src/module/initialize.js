import HomeImg from '../images/home.jpg'; // Import correctly

export default function Initialize() {
    const backGround = document.createElement('div')
    const Heading = document.createElement('h1')
    const description = document.createElement('p')
    const body = document.getElementById('content')
    const button = document.getElementById('home')

    // ---------STYLE---------

    // Nav
    button.style.backgroundColor = 'black'
    button.style.color = 'white'

    // text
    Heading.innerText = 'The Gilded Table'
    description.innerText = 'At Trattoria Bella, we believe that food is best enjoyed with family and friends. Our family recipes, passed down through generations, are the heart and soul of our menu. From our rich and flavorful pasta sauces to our perfectly charred pizzas, every dish is made with love and a commitment to authentic Italian flavors. Come gather around our table and experience the warmth of Italian hospitality at Trattoria Bella.'

    Heading.style.textAlign = 'center'
    description.style.margin = 'auto'
    description.style.textAlign = 'center'
    description.style.width = '50vw'
    Heading.style.color = 'white'
    description.style.color = 'white'
    Heading.style.textShadow = '0px 0px 3px black'
    description.style.textShadow = '0px 0px 3px black'
    Heading.style.marginBottom = '30px'

    // Background
    backGround.style.backgroundImage = `url("${HomeImg}")`
    backGround.style.width = '100vw'
    backGround.style.height = '100vh'
    backGround.style.backgroundSize = 'cover'
    backGround.style.backgroundPosition = 'center'
    backGround.style.padding = '60px'

    // append child 
    backGround.appendChild(Heading)
    backGround.appendChild(description)

    body.appendChild(backGround)
}