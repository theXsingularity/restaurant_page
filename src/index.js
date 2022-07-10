import { about } from './about';
import { menu } from './menu';
import { home } from './home';
import Background from './background.jpg';
import './style.css';


    
/* ----- creating three button header ----- */
const headerContainer = document.createElement('but');
headerContainer.classList.add('headerContainer')

const headerBox1 = document.createElement('button');
headerBox1.classList.add('box')
headerBox1.innerHTML = 'Home';   

const headerBox2 = document.createElement('button');
headerBox2.classList.add('box')
headerBox2.classList.add('menuBox')
headerBox2.innerHTML = 'Menu';  

const headerBox3 = document.createElement('button');
headerBox3.classList.add('box')
headerBox3.innerHTML = 'About';   

headerContainer.appendChild(headerBox1)
headerContainer.appendChild(headerBox2)
headerContainer.appendChild(headerBox3)

//adding event listeners to each tab
headerBox1.addEventListener('click', function() {
    console.log("test - clicked home") //works
    content.removeChild(content.lastChild)
    content.removeChild(content.lastChild)
    content.append(headerContainer)
    content.appendChild(home())
    content.appendChild(footer)
})
headerBox2.addEventListener('click', function() {
    console.log("test - clicked menu") //works
    content.removeChild(content.lastChild)
    content.removeChild(content.lastChild)
    content.append(headerContainer)
    content.appendChild(menu())
    content.appendChild(footer)
})

headerBox3.addEventListener('click', function() {
    console.log("test - clicked about") //works
    content.removeChild(content.lastChild)
    content.removeChild(content.lastChild)
    content.append(headerContainer)
    content.appendChild(about())
    content.appendChild(footer)
})

/* creating footer */
const footer = document.createElement('div');
footer.classList.add('footer');
footer.innerHTML = 'FOOT';

//Adding the tabs
content.appendChild(headerContainer);

//default starts w/ about page
content.appendChild(about());
content.appendChild(footer)

const myIcon = new Image();
myIcon.src = Background;






