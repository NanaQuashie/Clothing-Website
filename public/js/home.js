

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];



let shop = document.getElementById("shop");




let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((n)=>{
        let {id,name,desc,price,img} = n;
        let search = basket.find((n)=>n.id === id) || []
        return `
    <div id=product-id-${id} class="product-card">
        <div class="product-image">
            <span class="discount-tag">50% off</span>
                <img src=${img} class="product-thumb" alt="">
                <button class="card-btn">add to wishlist</button>
        </div>
                
        <div class="product-info">
            <h2 class="product-brand">${name}</h2>
            <p class="product-short-des">${desc}</p>
            <div class="price-quantity">
                <h2>Ghc ${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement('${id}')" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">
                        ${search.item === undefined? 0: search.item}</div>
                         <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
            </div>
        </div>
    `
    }).join(""));
};

let basket = JSON.parse(localStorage.getItem("nana")) || [];

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((n)=> n.id === id);

    if(search === undefined){
        basket.push({
        id: id,
        item: 1,
    });
    } else {
        search.item += 1;
    }

   

    // console.log(basket);
    update(id);
     localStorage.setItem("nana", JSON.stringify(basket));
 };
 let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((n)=> n.id === id);

    if(search === undefined) return;
    else if(search.item === 0) return;
     else {
        search.item -= 1;
    }

     update(id);
     basket = basket.filter((n) => n.item !== 0);
    // console.log(basket);
    

    localStorage.setItem("nana", JSON.stringify(basket));
 };
 let update = (id) => {
    let search = basket.find((n)=>n.id === id);

    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation()
 };

 let calculation =()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((n)=>n.item).reduce((n,p)=>n+p, 0)
    
 };

  calculation();

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

     preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

