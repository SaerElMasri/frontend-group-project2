
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
if(password==confirmed){
let data = new FormData();
data.append('email',email);
data.append('password',password);
data.append('confirmed', confirmed);
axios.post('http://localhost/backend-group-project2/reset_password.php', data).then(function (res) {
    console.log(res.data.status)
        if (res.data.status=="Password Changed") {
        alert("changed successfully!");
        window.location.href = "../pages/Registration.html"; // redirect to login page
        
      }else {
       alert("Make sure that the email is true");
      }
      }).catch(function (err) {
          console.log(err);
      })
}else{
    alert("passwords are not the same")
}}