// Toggle class active

const dropDownMenu = document.querySelector('.dropdown');
const hm = document.querySelector('.hm');
const shoppingCart = document.querySelector('.shopping-cart');
const menu = document.querySelector('#menu');
const sc = document.querySelector('#shopping-cart-button');



// Ketika menu di klik
document.querySelector('#menu').onclick = () => {
    dropDownMenu.classList.toggle('active');
}

// Ketika shopping cart di klik
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.prefentDefault();
}

// Klik di luar side bar untuk menghilangkan nav
document.addEventListener('click',function (e) {
    if(!menu.contains(e.target) && !dropDownMenu.contains(e.target)) {
        dropDownMenu.classList.remove('active');
    }
})

document.addEventListener('click',function (e) {
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
})



document.addEventListener('click',function (e) {
    if (hm.contains(e.target))  {
        dropDownMenu.classList.remove('active');
    }
})

        
