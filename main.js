import personData from "./data.js";

const table = document.getElementById("data");
const myPersonData = new personData();
   
fetch ("https://jsonplaceholder.typicode.com/users")
.then (response => response.json())
.then (response => {
    table.innerHTML = myPersonData.render(response);
});
