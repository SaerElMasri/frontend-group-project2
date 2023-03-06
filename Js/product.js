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

axios({
  "method": "get",
  "url": "http://localhost/backend-group-project2\product.php",
  "data": id
}).then((result) => {
  console.log(result)

}).catch((err) => {
  console.error(err)
});


    