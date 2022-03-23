import personData from "./data.js";

const table = document.getElementById("data");
   
fetch ("https://jsonplaceholder.typicode.com/users")
.then (response => response.json())
.then (response => {
    const columns = ["Id", "Name", "Email", "Phone", "Username", "Website","Company", "City"];
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
