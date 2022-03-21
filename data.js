class personData {
    constructor(init) {
        this.init = init;
    }

    createHeader(data) {
        let open = "<thead><tr>";
        let close = "</tr></thead>";
        data.forEach((d) => {
            open += `<th>${d}</th>`;
        });

        return open + close;
    }

    createBody(data) {
        let open = "<tbody>";
        let close = "</tbody>";

        data.forEach((d) => {
            open += "<tr>";
            d.forEach((c) => {
                open += `<td>${c}</td>`;
            });
            open += "</tr>";
        });
        return open + close;
    }

    render(element) {
        let person =
            "<table class='table table-hover text-center'>" +
            this.createHeader(this.init.columns) +
            this.createBody(this.init.data) +
            "</table>";
        element.innerHTML = person;
    }
}

export default personData;