document.addEventListener("DOMContentLoaded", function() {
    let cardsContainer = document.querySelector(".cards-container");
    let cards = document.querySelectorAll(".card");
    let cardsArray = Array.from(cards);

    function order() {
        return Math.random() - 0.5;
    }
    cardsArray.sort(order);

    cardsContainer.innerHTML = "";
    cardsArray.forEach(function(card) {
        cardsContainer.appendChild(card);
    });
});
