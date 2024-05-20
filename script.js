document.addEventListener("DOMContentLoaded", function() {
    let cardsContainer = document.querySelector(".cards-container");
    let cards = document.querySelectorAll(".card");
    
    cardsContainer.innerHTML = "";
    [...cards].sort(() => Math.random() - 0.5).forEach(card => cardsContainer.appendChild(card));
});
