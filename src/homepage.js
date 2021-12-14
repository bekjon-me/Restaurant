import Img from './chef.jpg';

const homePage = (() => {

        const orderDiv = document.createElement('div');
        orderDiv.classList.add('orderDiv');
        const p1 = document.createElement('p');
        p1.innerHTML = "Best pizza in your country";
        orderDiv.appendChild(p1);
        const p2 = document.createElement('p');
        p2.innerHTML = "Made with passion since 1908";
        orderDiv.appendChild(p2);
        const orderImage = document.createElement('img');
        orderImage.src = Img;
        orderImage.classList.add('orderImage')
        orderDiv.appendChild(orderImage);
        const p3 = document.createElement('p');
        p3.innerHTML = "Order online or visit us"
        orderDiv.appendChild(p3);
        return {
                orderDiv,
                p1,p2,p3,orderImage
        }
        
})();
export {homePage};