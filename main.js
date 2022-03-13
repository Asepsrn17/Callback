    const table = document.getElementById("data");
    table.innerHTML = Table()

    fetch("data.json")
    .then(response => response.json())
    .then(response => {
        table.innerHTML = render(response);
    });

    function render(result) {
        let table = "";
        result.forEach((data) => {
          table += `<tr>
                      <td>${data.Name}</td>
                      <td>${data.Usia}</td>
                      <td>${data.Email}</td>
                      <td>${data.NoTelp}</td>
                    </tr>`;
        });
        return table;
      }

    function Table() {
  return table;
}

