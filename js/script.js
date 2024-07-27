
let dom = document.querySelector("body");
let dom2 = document.createElement("section");
let dom3 = document.createElement("section");
dom2.classList.add("second-sixth");
dom3.classList.add("second");


fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        data.products.map(item => {
                dom2.innerHTML += `
                <div>
                    <img src="${item.thumbnail}" alt="">
                    <h3>${item.title}</h3>
                </div>
            `
        })
    })

fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        data.products.map(item => {
            dom3.innerHTML += `
                <div class="section">
                    <img src="${item.thumbnail}" alt="">
                    <h3>${item.title}</h3>
                    <b>${item.price}</b>
                </div>
            `
        })
    })
// let container = document.getElementById('container1');
dom.innerHTML += `
<header class="header">
<div>
    <img src="../../img/Logo.png" alt="">
</div>
<div>
    <input class="header-input" type="text">
    <button class="header-button">Search</button>
</div>
<div>
    <img src="../../img/Heart (1).png" alt="">
    <img src="../../img/Cart (2).png" alt="">
    <img src="../../img/Info.png" alt="">
</div>
</header>
<nav class="nav">
<div class="nav-div1">
<span>Home</span>
<span>Shop</span>
<span>Pages</span>
<span>Blog</span>
<span>About Us</span>
<span>Contact Us</span>
</div>
<div>
<img class="nav-img" src="../img/PhoneCall 1.png" alt="">
<span>(219) 555-0114</span>
</div>
</nav>
<main>
<section class="main-section1">
<div>
    <img src="../img/Bannar Big.png" alt="">
</div>
<div class="main-section1-div1">
    <img class="main-section1-img1" src="../img/Bannar.png" alt="">
    <img src="../img/Bannar (1).png" alt="">
</div>
</section>
<section>
<div class="main-section2-div2">
    <div class="main-section2-div2">
        <div>
            <img class="main-section2-img1" src="../img/delivery-truck 1.png" alt="">
        </div>
        <div>
            <b>Free Shipping</b>
            <span class="main-section2-span1">Free shipping on all your order</span>
        </div>
    </div>
    <div class="main-section2-div2">
        <div>
            <img class="main-section2-img1" src="../img/headphones 1.png" alt="">
        </div>
        <div>
            <b>Free Shipping</b>
            <span class="main-section2-span1">Free shipping on all your order</span>
        </div>
    </div>
    <div class="main-section2-div2">
        <div>
            <img class="main-section2-img1" src="../img/shopping-bag.png" alt="">
        </div>
        <div>
            <b>Free Shipping</b>
            <span class="main-section2-span1">Free shipping on all your order</span>
        </div>
    </div>
    <div class="main-section2-div2">
        <div>
            <img class="main-section2-img1" src="../img/package.png" alt="">
        </div>
        <div>
            <b>Free Shipping</b>
            <span class="main-section2-span1">Free shipping on all your order</span>
        </div>
    </div>
</div>
</section>
</main>
`

let arr = [
    {
        id: 1,
        img: "../../img/image 1.png",
        title: "Fresh Fruit",
    }
]

arr.forEach(item => {

    for (let i = 0; i <= 6; i++) {
    let container = document.getElementById('container');

    let imgElement = document.createElement('img');
    imgElement.src = item.img;
    container.appendChild(imgElement);

    let titleElement = document.createElement('p');
    titleElement.textContent = item.title;
    container.appendChild(titleElement);  
    }
});