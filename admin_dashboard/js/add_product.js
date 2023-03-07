const addURL = "http://localhost/backend-group-project2/add_product.php";
let product_name = document.querySelector("#name");
let product_description = document.querySelector("#description");
let product_price = document.querySelector("#price");
let product_category = document.querySelector("#category");
let product_img = document.querySelector("#img");
document.querySelector("#add-action").onclick = () => {
    if(product_name.value == "" && product_description.value == "" && product_category.value == "" && product_price.value == "" && product_img.value == ""){
        alert("Cannot add empty rows");
    }else{
        const data = new FormData();
        data.append("name", product_name.value);
        data.append("description", product_description.value);
        data.append("price", product_price.value);
        data.append("category", product_category.value);
        data.append("image_url", product_img.value);
        axios.post(addURL, data).then((result) => {
            console.log(result["status"]);
            alert("Added successfully");
            window.location.href = "http://localhost/frontend-group-project2/admin_dashboard/pages/product_table.html";
        }).catch((err) => {
            console.log(err);
        });
    }
    
}