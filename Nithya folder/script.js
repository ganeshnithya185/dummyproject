// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0) {
//     console.log("bus");
//   } else {
//     console.log(i);
//   }
// // }
// a = 10;
// b = "10";
// if (a === b) {
//   console.log("its equal");
// } else {
//   console.log("Not equal");
// }
// let string = "zenclass";
// let result = string.split("");
// console.log(result);

function calculateTotalMarks() {
  let maths = parseInt(prompt("Enter Maths marks:"));
  let science = parseInt(prompt("Enter Science marks:"));
  let social = parseInt(prompt("Enter Social marks:"));

  let total = maths + science + social;
  console.log("Total Marks: " + total);
}

calculateTotalMarks();
