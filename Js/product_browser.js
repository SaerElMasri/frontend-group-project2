document.addEventListener('DOMContentLoaded', () => {
    const url = "http://localhost/backend-group-project2/products.php";
    fetchProducts(url);
});
document.querySelectorAll(".add-to-cart-btn").onclick = () => {
    console.log("Added");
}
let check_laptop = document.getElementById("laptops");
let check_smartphone = document.getElementById("smarthphones");
let check_acc = document.getElementById("accessories");
document.getElementById("filter-action").onclick = () => {
    document.querySelector(".products-div").innerHTML = "";
    const filter_category = "http://localhost/backend-group-project2/category_product.php";

    if(check_laptop.checked){
        axios.get(filter_category, {
            params: {
                "category": check_laptop.value
            }
        }).then((response) => {
            let data = response.data;
            products(data);
        }).catch((err) => {
            console.log(err);
        });
    }else if(check_smartphone.checked){
        axios.get(filter_category, {
            params: {
                "category": check_smartphone.value
            }
        }).then((response) => {
            let data = response.data;
            products(data);
        }).catch((err) => {
            console.log(err);
        });
    }else if(check_acc.checked){
        axios.get(filter_category, {
            params: {
                "category": check_acc.value
            }
        }).then((response) => {
            let data = response.data;
            products(data);
        }).catch((err) => {
            console.log(err);
        });
    }else{
        alert("Nothing to filter");
    }
};
document.getElementById("clear-action").onclick = () => {
    const url = "http://localhost/backend-group-project2/products.php";
    document.querySelector(".products-div").innerHTML = "";
    fetchProducts(url);
}


const products = (data_response) => {
    const addURL = "http://localhost/backend-group-project2/add_to_cart.php";
    data_response.forEach((item) => {
        const markup = `
            <div class="product-component">
            <div class="product-img">
                <img src="${item.image_url}" alt="">
                <button class="add-to-cart-btn">Add to Cart</button>
                <div class="bg-effect"></div>
            </div>
            <div class="product-brief">
                <h1>${item.name}</h1>
                <h2>$${item.price}</h2>
            </div>
            </div>
        `;
        const element = document.createRange().createContextualFragment(markup);
            const buttons = element.querySelectorAll('.add-to-cart-btn');
            let prod_data = new FormData();
                prod_data.append("id", item.id);
                prod_data.append("prod_name", item.name);
                prod_data.append("prod_description", item.description);
                prod_data.append("price", item.price);
                prod_data.append("image_url", item.image_url);
            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    axios.post(addURL, prod_data).then((res) => {
                        console.log(res['status']);    
                    }).catch((err) => {
                        console.log(err);
                    });
                });
            });
            document.querySelector(".products-div").appendChild(element);
    });
}
const fetchProducts = async(url) => {
    const addURL = "http://localhost/backend-group-project2/add_to_cart.php";
    await fetch(url).then((response)=>{
        return response.json();
    }).then(data => {
        data.forEach(prod => {
            let id = prod.id;
            const markup = `
                <div class="product-component">
                <div class="product-img">
                    <img src="${prod.image_url}" alt="">
                    <button class="add-to-cart-btn">Add to Cart</button>
                    <div class="bg-effect"></div>
                </div>
                <div class="product-brief">
                    <h1>${prod.name}</h1>
                    <h2>$${prod.price}</h2>
                    <a class ="view_details" href = http://localhost/frontend-group-project2/pages/product.html?id=${prod.id}>View Details</a>
                </div>
                </div>
            `;
            const element = document.createRange().createContextualFragment(markup);
            const buttons = element.querySelectorAll('.add-to-cart-btn');
            let prod_data = new FormData();
            prod_data.append("id", id);
            prod_data.append("prod_name", prod.name);
            prod_data.append("prod_description", prod.description);
            prod_data.append("price", prod.price);
            prod_data.append("image_url", prod.image_url);
            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    axios.post(addURL, prod_data).then((res) => {
                        console.log(res['status']);    
                    }).catch((err) => {
                        console.log(err);
                    });
                });
            });
            document.querySelector(".products-div").appendChild(element);
            
        });
    }).catch((err) => {
        console.log(err);
    });
}