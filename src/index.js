import { about } from './about';
import { menu } from './menu';
import { home } from './home';
import './style.css';


    
/* ----- creating three button header ----- */
    const headerContainer = document.createElement('but');
    headerContainer.classList.add('headerContainer')

    const headerBox1 = document.createElement('button');
    headerBox1.classList.add('box')
    headerBox1.innerHTML = 'Home';   

    const headerBox2 = document.createElement('button');
    headerBox2.classList.add('box')
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
        content.appendChild(home())
    })
    headerBox2.addEventListener('click', function() {
        console.log("test - clicked menu") //works
        content.removeChild(content.lastChild)
        content.appendChild(menu())
    })

    headerBox3.addEventListener('click', function() {
        console.log("test - clicked about") //works
        content.removeChild(content.lastChild)
        content.appendChild(about())
    })

    


//Adding the tabs
content.appendChild(headerContainer);

//default starts w/ about page
content.appendChild(menu());



