const product_img = document.getElementById("product_img")
const product_info = document.getElementById("product_info")
const product_title = document.getElementById("product_title")
const product_description = document.getElementById("product_description")
const product_price = document.getElementById("product_price")
const product_category = document.getElementById("product_category")


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);
url = `http://localhost/backend-group-project2/product.php?id=${id}`;

fetch(url)
.then(res=>res.json())
.then(data => {
 console.log(data);
 product_title.innerText=data.name;
 product_description.innerText=data.description;
 product_price.innerText=` $${data.price}`;
 product_img.src=data.image_url;
 product_category.innerText=data.category;
 product_category.style.backgroundColor="#FF5800";
 product_category.style.color="#ffffff";
 product_category.style.padding="0.5%";
 product_category.style.width="fit-content";
 product_category.style.textTransform="capitalize";
 product_category.style.borderRadius="8%";

 const addURL = "http://localhost/backend-group-project2/add_to_cart.php";
 const button = document.querySelector('.add-to-cart-btn');
            let prod_data = new FormData();
                prod_data.append("id", data.id);
                prod_data.append("prod_name", data.name);
                prod_data.append("prod_description", data.description);
                prod_data.append("price", data.price);
                prod_data.append("image_url", data.image_url);
                button.addEventListener('click', () => {
                    axios.post(addURL, prod_data).then((res) => {
                        console.log(res['status']);    
                    }).catch((err) => {
                        console.log(err);
                    });
                });
            });




    