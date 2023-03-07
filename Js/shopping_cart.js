const display_cart = "http://localhost/backend-group-project2/display_cart.php";
const remove_cart = "http://localhost/backend-group-project2/remove_from_cart.php";
let checkout = document.querySelector(".btn-proceed");
let total = document.querySelector("#final_total");
let total_price = 3;
total.innerHTML = "0";


checkout.addEventListener('click',()=>{
window.location.href= "http://localhost/frontend-group-project2/pages/checkout.html";})

const fetchProducts = async(url) => {
  let product_price;
  let id;
  await fetch(url).then((response) => {
    return response.json();
  }).then((data) => {
    data.forEach((prod) => {
      id = prod.id;
      product_price = prod.price;
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
      total_price += prod.price;
      total.innerHTML = "$" + total_price;
      const element = document.createRange().createContextualFragment(markup);
      document.querySelector(".shopping-cart-container").appendChild(element);
    });
    let delete_btn = document.querySelectorAll(".delete-btn");
    delete_btn.forEach(btn => {
      btn.addEventListener("click", () => {
        //const id = btn.getAttribute("data-id");
        btn.classList.add("deleted-btn");
        axios.get(remove_cart, {
          params: {
            "id":id
          }
        }).then((res) => {
          console.log(res);
          total_price -= product_price;
          total.innerHTML = "$" + total_price;
          btn.closest(".item").remove();
        }).catch((err)=>{
          console.log(err);
        });
      })
    })
  }).catch((err) => {
    console.log(err);
  });
}
fetchProducts(display_cart);
