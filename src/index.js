import { home } from './home';
import './style.css';

const content = document.getElementById('content');

console.log("logging from index.js")




//content.appendChild(home())  

/*  why does't the above work
but this does */ 

document.body.appendChild(home()) 


