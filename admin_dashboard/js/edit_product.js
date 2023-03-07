const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const editURL = "http://localhost/backend-group-project2/edit_product.php";
let product_name = document.querySelector("#name");
let product_description = document.querySelector("#description");
let product_price = document.querySelector("#price");
let product_category = document.querySelector("#category");
let product_img = document.querySelector("#img");
document.querySelector(".all-btn").onclick = () => {
    const data = new FormData();
    data.append("id", id);
    data.append("name", product_name.value);
    data.append("description", product_description.value);
    data.append("price", product_price.value);
    data.append("category", product_category.value);
    data.append("image_url", product_img.value);
    axios.post(editURL, data).then((result) => {
        alert("Edited successfully");
        window.location.href = "http://localhost/frontend-group-project2/admin_dashboard/pages/product_table.html";
    }).catch((err) => {
        console.log(err);
    });
}