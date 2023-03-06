const LoginForm = document.querySelector("#Login");
const SignupForm = document.querySelector("#Signup");
const Loginbtn = document.querySelector("#login-btn");
const Signupbtn = document.querySelector("#signup-btn");

LoginForm.style.display = "none";

document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    LoginForm.style.display = "flex";
    SignupForm.style.display = "none";


});

Loginbtn.addEventListener("click", e => {
    e.preventDefault();
    LoginForm.style.display = "flex";
    SignupForm.style.display = "none";
});

document.querySelector("#linkSignup").addEventListener("click", e => {
    e.preventDefault();
     SignupForm.style.display = "flex";
     LoginForm.style.display = "none";

});
Signupbtn.addEventListener("click", e => {
    e.preventDefault();
     SignupForm.style.display = "flex";
     LoginForm.style.display = "none";

});


let signup_btn = document.getElementById('btn_signup');
let signin_btn = document.getElementById('btn_login');
signup_btn.addEventListener('click', signup);
signin_btn.addEventListener('click', signin);

function signup() {

    let first_name = document.getElementById('first_signup').value;
    let last_name = document.getElementById('last_signup').value;
    let email = document.getElementById('email_signup').value;
    let password = document.getElementById('password_signup').value;
    // let confirm_password = document.getElementById('confirmPass_signup').value;

    let data = new FormData();
    
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    data.append('email', email);
    data.append('password', password);
    axios.post('http://localhost/backend-group-project2/signup.php', data)
    .then((result) => {
    console.log(result);
    if (result.data.status== "success") {
      alert("Signed up successfully!");
      window.location.href = "../index.html"; // redirect to product page
    } else {
      alert("Email Already exists!");
    }
  })
  .catch((err) => {
    console.error(err);
  });


}

function signin() {
    let email = document.getElementById('email_signin').value;
    let password = document.getElementById('password_signin').value;
    let data = new FormData();
    data.append('email', email);
    data.append('password', password);
    axios.post('http://localhost/backend-group-project2/login.php', data).then(function (res) {
        console.log(res.data)
    if (res.data.response== "logged in") {
      alert("Logged in successfully!");
      if(email==="admin@gmail.com"&&password==="admin"){
         window.location.href = "../admin_dashboard/pages/product_table.html";
      }else
        window.location.href = "../index.html"; // redirect to product page
      
      
      
    }else {
      alert("Make sure login information is correct");
    }
    

    }).catch(function (err) {
        console.log(err);
    })

}
console.log('test')