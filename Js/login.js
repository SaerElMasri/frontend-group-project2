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