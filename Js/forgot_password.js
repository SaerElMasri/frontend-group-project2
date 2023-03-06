const submit = document.getElementById('submit');
console.log(submit);
submit.addEventListener("click",sub);

function sub(){
    const email=document.getElementById("email").value;
    console.log(email);
    const password=document.getElementById("pass").value;
    console.log(password);
    const confirmed=document.getElementById("confirmed").value;
    console.log(confirmed);

let data = new FormData();
data.append('email',email);
data.append('password',password);
data.append('confirmed', confirmed);
axios.post('http://localhost/backend-group-project2/reset_password.php', data).then(function (res) {
    console.log(res.data)
    console.log(window.sessionStorage.getItem('user_id'))
}).catch(function (err) {
    console.log(err);
})

}