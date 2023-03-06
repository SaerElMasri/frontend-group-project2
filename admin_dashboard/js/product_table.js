const logout_btn = document.querySelector("#logout_btn");
logout_btn.addEventListener("click", () => {
    window.location.href="http://localhost/frontend-group-project2/pages/registration.html";
});

const product_api = "http://localhost/backend-group-project2/products.php";
const fetchProducts = async(url) => {
    await fetch(url).then((response)=>{
        return response.json();
    }).then(data => {
        data.forEach(prod => {
            console.log(prod.id);
            const markup = `
                <div class="row-product">
                    <h1>${prod.name}</h1>
                    <h1>${prod.description}</h1>
                    <h1>$${prod.price}</h1>
                    <h1>${prod.category}</h1>
                    <button type="button" id="edit-action">Edit Product</button>
                </div>
            `;
            const edit_btn = document.querySelectorAll("#edit-action");
            let product_data = new FormData();
            product_data.append("id", prod.id);
            product_data.append("name", prod.name);
            product_data.append("description", prod.description);
            product_data.append("price", prod.price);
            product_data.append("category", prod.category);
            product_data.append("image_url", prod.image_url);
            edit_btn.forEach((btn) => {
                btn.addEventListener("click", () => {
                    window.location.href = `http://localhost/frontend-group-project2/pages/edit_product.htmlid=${id}`;
                });
            })
            document.querySelector(".row").insertAdjacentHTML("beforeend",markup);
        });
    }).catch((err) => {
        console.log(err);
    });
}
fetchProducts(product_api);