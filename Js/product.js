const product_img = document.getElementById("product_img")
const product_info = document.getElementById("product_info")
const product_title = document.getElementById("product_title")
const product_description = document.getElementById("product_description")
const product_price = document.getElementById("product_price")

const increaseCount = (a,b) =>{
  let input = b.previousElementSibling;
  let value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

const decreaseCount = (a,b) => {
  let input = b.nextElementSibling;
  let value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);
url = `http://localhost/backend-group-project2/product.php?id=${id}`;

const productDetail = 
fetch(url)
.then(res=>res.json())
.then((data) => data.forEach(item) => {
  product_title.innerText=item.name}))
  
  // product_description.innerText=data.description)
  // product_img.innerText=data.name,
  // console.log(data))






// fetch(`http://localhost/backend-group-project2/product.php?id=${id}`).then(res=>res.json()).then(data=>console.log(data))


    