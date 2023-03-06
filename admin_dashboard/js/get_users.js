const myTable = document.getElementById('table_row');
const tbody = myTable.querySelector('tbody');
const logout_btn = document.getElementById('logout');

logout_btn.addEventListener('click',() =>{
  window.location.href="http://localhost/frontend-group-project2/pages/registration.html";
})

let table_row = document.getElementById("table_row");
const display_users = "http://localhost/backend-group-project2/users.php";
const fetch_users = async(url) => {
  await fetch(url).then((response)=>{
    
      return response.json();
  }).then(data => {
    data.forEach(user => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');
      td1.textContent = user.first_name;
      td2.textContent = user.last_name;
      td3.textContent = user.email

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tbody.appendChild(tr);
    });


  }).catch((err) => {
      console.log(err);
  });
}
fetch_users(display_users);

