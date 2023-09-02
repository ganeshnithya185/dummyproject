const addName = document.getElementById("addname");
const addAge = document.getElementById("addage");
const addCity = document.getElementById("addcity");
const Button = document.getElementById("Button"); // Corrected ID here
const addtodo = (e) => {
  e.preventDefault();
  const nameValue = addName;
  const ageValue = addAge;
  const cityValue = addCity;
  const newRow = `
    <tr>
      <td>${nameValue}</td>
      <td>${ageValue}</td>
      <td>${cityValue}</td>
    </tr>
  `;
  table.appendChild(newRow);
};
Button.addEventListener("click", addtodo); // Corrected listener assignment
