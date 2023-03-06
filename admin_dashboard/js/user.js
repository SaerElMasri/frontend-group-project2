const addURL = "http://localhost/backend-group-project2/users.php";
const fetchProducts = async(url) => {
    
    await fetch(url).then((response)=>{
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}
fetchProducts(addURL);