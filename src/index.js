import { about } from './about';
import { menu } from './menu';
import './style.css';


    
/* ----- creating three button header ----- */
(function() {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer')

    const headerBox1 = document.createElement('div');
    headerBox1.classList.add('headerBox1')
    headerBox1.innerHTML = 'Home';   

    const headerBox2 = document.createElement('div');
    headerBox2.classList.add('headerBox2')
    headerBox2.innerHTML = 'Menu';  

    const headerBox3 = document.createElement('div');
    headerBox3.classList.add('headerBox3')
    headerBox3.innerHTML = 'About';   

    headerContainer.appendChild(headerBox1)
    headerContainer.appendChild(headerBox2)
    headerContainer.appendChild(headerBox3)

    //adding event listeners to each tab
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
})();
    


//Adding the tabs
content.appendChild(headerContainer);

//default starts w/ about page
content.appendChild(about());



