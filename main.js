import personData from "./data.js";

const table = document.getElementById("data");
//const myPersonData = new personData();
   
fetch ("https://jsonplaceholder.typicode.com/users")
.then (response => response.json())
.then (response => {
    console.log(response);
  //  table.innerHTML = myPersonData.render(response);
    const columns = ["id", "name", "email", "phone", "username", "website","company", "city"];
    const data = response.map((d) => [
        d.id,
        d.name,
        d.email,
        d.phone,
        d.username,
        d.website,
        d.company.name,
        d.address.city,

    ]);

    const myPersonData = new personData({columns, data});
    myPersonData.render(table);
});
