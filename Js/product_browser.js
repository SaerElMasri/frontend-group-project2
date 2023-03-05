document.addEventListener('DOMContentLoaded', () => {
    const url = "http://localhost/backend-group-project2/products.php";

    axios(url)
    const fetchProducts = async(url) => {
        await fetch(url).then((response)=>{
            return response.json();
        }).then(data => {
            data.forEach(prod => {
                const markup = `
                <div class="product-component">
                <div class="product-img">
                    <img src="../assets/dummy_product.png" alt="">
                    <button class="add-to-cart-btn">Add to Cart</button>
                    <div class="bg-effect"></div>
                </div>
                <div class="product-brief">
                    <h1>${prod.name}</h1>
                    <h2>$${prod.price}</h2>
                </div>
                </div>
            `;
            document.querySelector(".products-div").insertAdjacentHTML('beforeend', markup);
                
            });
        }).catch((err) => {
            console.log(err);
        });

    }
    fetchProducts(url);
});