import './index.css';
import cafe from './cafe.jpg'

const navBar=()=>{
    const content = document.querySelector('#content');
    const nav=document.createElement('nav');
    content.appendChild(nav);
    const ul=document.createElement('ul');
    nav.appendChild(ul);

    const links = ['CoffeeWorld','Menu','About']
    for(let i=0;i<3;i++){
        const list = document.createElement('li');
        list.classList.add('nav-list-item')
        const a = document.createElement('a');
        a.textContent=links[i];
        a.setAttribute('id',links[i]);
        ul.appendChild(list);
        list.appendChild(a);
    }

}
const main=()=>{
    const img = new Image()
    img.classList.add('main-img');
    img.src=cafe;
    const rightDiv=document.createElement('div');
    rightDiv.appendChild(img);

    const leftDiv=document.createElement('div');
    leftDiv.classList.add('left-div')
    const h1=document.createElement('h1');
    h1.textContent = 'Coffee,Tea,Biscuits.....';
    const h2 = document.createElement('h2');
    h2.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip reprehenderit in voluptate velit esse cillum dolore eu fugiat';
    leftDiv.appendChild(h1);
    leftDiv.appendChild(h2);

    const mainDiv=document.createElement('div');
    mainDiv.classList.add('main-div')
    mainDiv.appendChild(leftDiv);
    mainDiv.appendChild(rightDiv);
    content.appendChild(mainDiv);
}

const footer=()=>{
    const footerDiv=document.createElement('div');
    footerDiv.classList.add('footer-div');
    content.append(footerDiv);
    const footerInfo = document.createElement('div');
    footerInfo.classList.add('footer-info');
    footerInfo.textContent="© 2023, CoffeeWorld Inc.";
    footerDiv.append(footerInfo);
}
export {navBar,main,footer};