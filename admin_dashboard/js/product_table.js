const logout_btn = document.querySelector("#logout_btn");
logout_btn.addEventListener("click", () => {
    window.location.href="http://localhost/frontend-group-project2/pages/registration.html";
});
const product_api = "http://localhost/backend-group-project2/products.php";
const fetchProducts = async(url) => {
    let product_data = new FormData();
    await fetch(url).then((response)=>{
        return response.json();
    }).then(data => {
        data.forEach(prod => {
            const markup = `
                <div class="row-product">
                    <h1>${prod.name}</h1>
                    <h1>${prod.description}</h1>
                    <h1>$${prod.price}</h1>
                    <h1>${prod.category}</h1>
                    <button type="button" id="edit-action" data-id="${prod.id}">Edit Product</button>
                </div>
            `;
            document.querySelector(".row").insertAdjacentHTML("beforeend",markup);
        } );
            const edit_btn = document.querySelectorAll("#edit-action");
            edit_btn.forEach((btn) => {
                btn.addEventListener("click", () => {
                    const productId = btn.getAttribute("data-id");
                    window.location.href = `http://localhost/frontend-group-project2/admin_dashboard/pages/edit_product.html?id=${productId}`;
                });
            })
        }).catch((err) => {
        console.log(err);
    });
}
fetchProducts(product_api);