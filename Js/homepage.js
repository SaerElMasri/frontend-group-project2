let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}

let countDownDate = new Date("Mar 10, 2023 15:37:25").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("hot_deal_countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("hot_deal_countdown").innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hot_deal_countdown").innerHTML = "EXPIRED";
  }
}, 1000);
const display_products = "http://localhost/backend-group-project2/products.php?limit=8";
const fetchProducts = async(url) => {
  await fetch(url).then((response)=>{
      return response.json();
  }).then(data => {
    let new_prod = data.slice(0,8);
    new_prod.forEach(prod => {
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
      document.querySelector(".new_products_grid").appendChild(element); 
    });
  }).catch((err) => {
      console.log(err);
  });
}
fetchProducts(display_products);
