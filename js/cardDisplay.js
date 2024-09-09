import projectData from "../data/data.js"


//store the card-container in a variable called cardContainer
let cardContainer = document.querySelector(".card-container");


function displayCards() {
    
    for (let item of projectData) {
    console.log(item.title)
    let cardItem = document.createElement("div");
    cardItem.className = "card";
    cardItem.innerHTML = `
    <div class="card-grid">
                <h3>${item.title}</h3>
                <img src=${item.image}>
                <p>${item.description}</p>
                <p><a href="${item.link}"> View the Project Here!</a></p>
            </div>
    `;
    console.log(cardItem)
    cardContainer.appendChild(cardItem);
   
    }
}
displayCards();
