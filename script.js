document.addEventListener("DOMContentLoaded", function() {
    let cardsContainer = document.querySelector(".cards-container");
    let cards = document.querySelectorAll(".card");
    
    cardsContainer.innerHTML = "";
    [...cards].sort(() => Math.random() - 0.5).forEach(card => cardsContainer.appendChild(card));

    cards.forEach(card => {
        card.addEventListener("click", function() {
            card.style.transform = "perspective(256px) rotateY(180deg)";
            card.querySelector(".front-card").style.transform = "perspective(256px) rotateY(180deg)";
            card.querySelector(".back-card").style.transform = "perspective(256px) rotateY(360deg)";
        });
    });
});
