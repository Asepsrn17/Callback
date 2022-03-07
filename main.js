    const table = document.getElementById("data");
    table.innerHTML = Table()

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(response => {
        table.innerHTML = render(response);
    });

    function render(result) {
        let table = "";
        result.forEach((data) => {
          table += `<tr>
                      <td>${data.id}</td>
                      <td>${data.name}</td>
                      <td>${data.username}</td>
                      <td>${data.email}</td>
                      <td>${data.address.street}</td>
                      <td>${data.company.name}</td>
                    </tr>`;
        });
        return table;
      }

    function Table() {
  return table;
}

