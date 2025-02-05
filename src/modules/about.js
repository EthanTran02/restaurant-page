import aboutImg from '../images/about.jpg'; // Import correctly

export default function About() {
    const button = document.getElementById('about')
    const heading = document.createElement('h1')
    const description = document.createElement('p')
    const content = document.getElementById('content')

    // RESET BACKGROUND
    content.style.backgroundImage = ''
    content.style.padding = ''
    // --------STYLE--------

    // Nav
    button.style.backgroundColor = 'black'
    button.style.color = 'white'

    // Text
    heading.innerText = "Fresh, Local, Delicious"
    description.innerText = 'At The Gilded Table, we believe in using only the freshest, locally-sourced ingredients. Learn about our commitment to sustainability and our partnerships with local farmers and producers.'
    heading.style.textAlign = 'center'
    heading.style.marginBottom = '32px'
    description.style.textAlign = 'center'
    description.style.width = '50vw'
    description.style.margin = 'auto'
    heading.style.color = 'white'
    description.style.color = 'white'

    // Backgound
    content.style.backgroundImage = (`url(${aboutImg})`)
    content.style.height = '100vh'
    content.style.padding = '80px'
    content.style.backgroundPosition = 'center'
    content.style.backgroundSize = 'cover'

    // Append child
    content.appendChild(heading)
    content.appendChild(description)
}