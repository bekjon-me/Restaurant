

const menuPage = (() => {

    const orderDiv = document.createElement('div');
    orderDiv.classList.add('orderDiv');
    orderDiv.innerHTML = `<div class="order"><img src="./images/ribs.png"><h1>Salsiccia</h1><p>Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil</p></div>
    <div class="order"><img src="./images/double-cheeseburger.png"><h1>Salsiccia</h1><p>Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil</p></div>
    <div class="order"><img src="./images/caesar-salad.png"><h1>Salsiccia</h1><p>Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil</p></div>
    <div class="order"><img src="./images/french-fries.png"><h1>Salsiccia</h1><p>Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil</p></div>
    <div class="order"><img src="./images/grilled-cheese.png"><h1>Salsiccia</h1><p>Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil</p></div>
    <div class="order"><img src="./images/hamburger.png"><h1>Salsiccia</h1><p>Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil</p></div>
    <div class="order"><img src="./images/ribs.png"><h1>Salsiccia</h1><p>Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil</p></div>
    <div class="order"><img src="./images/steak.png"><h1>Salsiccia</h1><p>Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil</p></div>`
    
    return {
            orderDiv
    }
    
})();
export {menuPage};