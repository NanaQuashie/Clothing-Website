const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">suits</a></li>
                    <li><a href="#" class="footer-link">coats and jackets</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">chinos and cargos</a></li>
                    <li><a href="#" class="footer-link">blazers</a></li>
                    <li><a href="#" class="footer-link">polo-shirts</a></li>
                    <li><a href="#" class="footer-link">joggers</a></li>
                </ul>

                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">suits</a></li>
                    <li><a href="#" class="footer-link">coats and jackets</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">chinos and cargos</a></li>
                    <li><a href="#" class="footer-link">blazers</a></li>
                    <li><a href="#" class="footer-link">polo-shirts</a></li>
                    <li><a href="#" class="footer-link">joggers</a></li>
                </ul>
            </div>
           
        </div>
        <p class="footer-title">about company</p>
        <p class="info">"Welcome to [Your Company Name], where we're dedicated to providing our customers with exceptional
            products/services and
            outstanding customer support. We pride ourselves on our commitment to quality, innovation, and sustainability,
            ensuring
            that every aspect of our business reflects our values. With years of experience in the industry, we strive to
            continually exceed our customers' expectations and earn their loyalty. Thank you for choosing [Your Company Name],
            we
            look forward to serving you."</p>
            <p class="info">support emails - help@clothing.com.gh,
                customersupport@clothing.com
            </p>
            <p class="info">telephone - 059 271 9319</p>

            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">privacy page</a>
                </div>

                <div>
                    <a href="#" class="social-link">instagram</a>
                    <a href="#" class="social-link">facebook</a>
                    <a href="#" class="social-link">twitter</a>
                </div>
            </div>
            <p class="footer-credit">Clothing, Best apparels online store</p>
    
    `;
}

createFooter();