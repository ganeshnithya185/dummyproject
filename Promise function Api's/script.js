fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((Datas) => {
    let tableData = "";
    Datas.map((values) => {
      tableData += `          <tr>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td><img src="${values.image}"</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
          </tr>`;
    });
    document.getElementById("table-body").innerHTML = tableData;
  });
