const createNav = () => {
    let nav = document.querySelector('.navbar');


nav.innerHTML = `
     <div class="nav">
          <a href="index.html"><img src="img/dark-logo.png" class="brand-logo" alt=""></a>
            
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" 
                    placeholder="search brand, product">
                    <button class="search-btn">search</button>
                     
                </div>
                <a>
                <img src="img/user.png" id="user-img" alt="">
                <div class="login-logout-popup hide">
                    <p class="account-info">Welcome, Guest!</p>
                    <button class="btn" id="user-btn">Log out</button>

                </div>
                </a>
                <div class="cart">
                <a href="shopping-cart.html"><i class="bi bi-cart4"> </i></a>
               </a><div id="cartAmount" class="cartAmount">0</div>
                
                </div>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
`;

}

createNav();

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        // means user is logged in
        popuptext.innerHTML = `Hello, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else{
        // user is logged out
        popuptext.innerHTML = 'Hello, Guest! Please log in to place an order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}

