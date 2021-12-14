import {homePage} from "./homepage.js";
import {menuPage} from "./menu.js";
import {aboutPage} from "./about.js";

import  './style.css';
import github from "./github-brands.svg";

// STARTER HAHAHAHAHA

const footer = document.createElement('div');
footer.classList.add('footer');
const p = document.createElement('p');
p.innerHTML = "Copyright &copy; 2021 bekjon-me";
const githubLink = document.createElement('a');
githubLink.setAttribute('href', 'http://www.github.com/bekjon-me')
const githubLogo = new Image();
githubLogo.classList.add('githublogo');
githubLogo.src = github;
githubLink.appendChild(githubLogo)

footer.appendChild(p);
footer.appendChild(githubLink);
document.body.appendChild(footer);






let activeLink;
const content = document.createElement('div');
content.id = 'content';
const title_h1 = document.createElement('h1');
title_h1.innerHTML = 'Bekjon';
title_h1.classList.add('title_h1');
content.appendChild(title_h1);
const navbarDiv = document.createElement('div');
navbarDiv.classList.add("navbar_div");
const link1 = document.createElement('a');
link1.innerHTML = 'Home';
link1.classList.add('link1');
navbarDiv.appendChild(link1);
const link2 = document.createElement('a');
link2.innerHTML = 'Menu'
link2.classList.add('link2');
navbarDiv.appendChild(link2);
const link3 = document.createElement('a');
link3.innerHTML = 'About';
link3.classList.add('link3');
navbarDiv.appendChild(link3);

content.appendChild(navbarDiv);
document.body.appendChild(content);




for(let i=0; i<4; i++) {
    document.getElementsByTagName('a')[i].addEventListener('click', addActive);
    function addActive() {
            if(activeLink === null || activeLink === undefined) {
                    activeLink = document.getElementsByTagName('a')[i];
                    activeLink.classList.add('active');
                    console.log(activeLink.classList)
                    if(activeLink.classList[0] == "link1") {
                        content.appendChild(homePage.orderDiv);
                    }else if(activeLink.classList[0] == "link2") {
                        content.appendChild(menuPage.orderDiv);
                    } else if(activeLink.classList[0] == "link3") {
                        content.appendChild(aboutPage.orderDiv);
                    } 
            }else {
                    activeLink.classList.remove('active');
                    activeLink = document.getElementsByTagName('a')[i];
                    console.log(i, activeLink.classList[0])
                    activeLink.classList.add('active');
                    if (activeLink.classList[0] == "link1") {
                        content.removeChild(content.childNodes[2]);
                        content.appendChild(homePage.orderDiv);
                    }else if(activeLink.classList[0] == "link2") {
                            content.removeChild(content.childNodes[2]);
                            content.appendChild(menuPage.orderDiv)
                    } else {
                        content.removeChild(content.childNodes[2]);
                        content.appendChild(aboutPage.orderDiv);
                        console.log(content.childNodes)
                    }
            }
        }
}





