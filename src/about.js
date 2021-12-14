import aboutImage from "./location.jpg";


const aboutPage = (() => {

    const orderDiv = document.createElement('div');
    orderDiv.classList.add('orderDiv');
    orderDiv.innerHTML = `<p class="about-p"><img class="phoneImg" src="./images/phone-solid.svg">+998908702909
    </p><br><h1 class="about-h1"><img class="aboutImg" src="./images/house-damage-solid.svg"> Hollywood Boulevard 42, Los Angeles, USA
    </h1><br>`;
    const aboutImg = new Image();
    aboutImg.classList.add('about-image')
    aboutImg.src = aboutImage;
    orderDiv.appendChild(aboutImg);
    return {
            orderDiv,
    }
    
})();
export {aboutPage};