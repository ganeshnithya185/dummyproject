// fetch("https://restcountries.com/v3.1/all")
//   .then((response) => response.json())
//   .then((data) => {
//     let tableData = "";
//     data.forEach((country) => {
//       tableData += `<tr>
//         <td>${country.name.common}</td>
//         <td>${country.region}</td>
//         <td>${country.subregion}</td>
//         <td><img src="${country.flag.png}" alt="${country.name.common} Flag" class="flag-img"></td>
//       </tr>`;
//     });
//     document.getElementById("table-body").innerHTML = tableData;
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// Async function

async function fetchDataAndPopulateTable() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    let tableData = "";
    data.map((country) => {
      tableData += `<tr>
        <td>${country.name.common}</td>
        <td>${country.region}</td>
        <td>${country.subregion}</td>
        <td><img src="${country.flags.png}" alt="${country.name.common} Flag" class="flag-img"></td>
        <td>${country.population}</td>
      </tr>`;
    });
    document.getElementById("table-body").innerHTML = tableData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataAndPopulateTable();
