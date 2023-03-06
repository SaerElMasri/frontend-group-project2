const myTable = document.getElementById('table_row');
const tbody = myTable.querySelector('tbody');
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
      // const node = document.createElement("div");
      // node.classList.add('table_row')
      // const first_name = document.createTextNode(user.first_name);
      // const last_name = document.createTextNode(user.last_name);
      // const email = document.createTextNode(user.email);
      // node.appendChild(first_name);
      // node.appendChild(last_name);
      // node.appendChild(email);
      // document.querySelector(".table_row").appendChild(node);

  }).catch((err) => {
      console.log(err);
  });
}
fetch_users(display_users);

