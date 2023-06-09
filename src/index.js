import {navBar,main,footer} from './home.js'
import menu from './menu.js'
import about from './about.js'

const content = document.querySelector('#content');
function home(){
    content.textContent="";
    navBar();
    main();
    footer();
}
function menuSection(){
    content.textContent="";
    navBar();
    menu();
    footer();
}
function aboutSection(){
    content.textContent="";
    navBar();
    about();
    footer();
}
document.addEventListener('click',(e)=>{
    const txt = e.target.textContent;
    if(txt=='Menu'){
        menuSection();
    }
    if(txt=='About'){
        aboutSection();
    }
    if(txt=='CoffeeWorld'){
        home();
    }
})
home();