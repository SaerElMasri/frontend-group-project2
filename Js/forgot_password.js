let signup_btn = document.getElementById('signup');
let signin_btn = document.getElementById('signin')
signup_btn.addEventListener('click', signup);
signin_btn.addEventListener('click', signin);

function signup() {

    let username = document.getElementById('username_signup').value;
    let password = document.getElementById('password_signup').value;
    let first_name = document.getElementById('first_signup').value;
    let last_name = document.getElementById('last_signup').value;

    let data = new FormData();
    data.append('username', username);
    data.append('password', password);
    data.append('first_name', first_name);
    data.append('last_name', last_name);