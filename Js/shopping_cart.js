let subtotal = document.querySelector("#sub_total");
let total = document.querySelector("#final_total");
subtotal.innerHTML = "0";
total.innerHTML = "0";
  const display_cart = "http://localhost/backend-group-project2/display_cart.php";
  const fetchProducts = async(url) => {
    await fetch(url).then((response)=>{
        return response.json();
    }).then(data => {
        data.forEach(prod => {
            const markup = `
              <div class="item">
              <div class="buttons">
                <button class="delete-btn" type="button"></button>
              </div>
              <div class="image">
                <img src="${prod.img_url}" alt="" />
              </div>
              <div class="description">
                <p class="product-name">${prod.prod_name}</p>
                <p class="product-description">${prod.prod_description}</p>
              </div>
              <div class="quantity">
                <input type="text" placeholder="Quantity" value="1">
              </div>
              <div class="total-price">
                <h1>$${prod.price}</h1>
              </div>
              </div>
            `;
            const element = document.createRange().createContextualFragment(markup);
            let delete_btn = document.querySelectorAll(".delete-btn");
            delete_btn.forEach(button => {
              button.addEventListener('mouseover', () => {
                  button.classList.add("deleted-btn");
              });
            });
            document.querySelector(".shopping-cart-container").appendChild(element);
            
        });
    }).catch((err) => {
        console.log(err);
    });
}
fetchProducts(display_cart);