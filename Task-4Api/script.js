async function fetchAndDisplayCards() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    const cardsContainer = document.querySelector(".cards-container");
    data.forEach((cardData) => {
      const card = document.createElement("div");
      card.classList.add("col-3", "mb-3");
      card.innerHTML = `
         <div class="card" style="width: 18rem;">
           <div class="card-body">
             <h6 class="card-title">Name: ${cardData.name}</h6>
             <h6 class="card-subtitle mb-2 text-body-secondary">Email: ${cardData.email}</h6>
             <h6 class="card-subtitle mb-2 text-body-secondary">Street: ${cardData.address.street}</h6>
             <h6 class="card-subtitle mb-2 text-body-secondary">City: ${cardData.address.city}</h6>

           </div>
         </div>
           `;
      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.log("Error", "error");
  }
}
fetchAndDisplayCards();
