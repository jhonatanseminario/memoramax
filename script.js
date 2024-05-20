document.addEventListener("DOMContentLoaded", function() {
    let cardsContainer = document.querySelector(".cards-container");
    let cards = document.querySelectorAll(".card");
    let flippedCards = 0;
    
    cardsContainer.innerHTML = "";
    [...cards].sort(() => Math.random() - 0.5).forEach(card => cardsContainer.appendChild(card));

    function flipCard(card) {
        card.classList.add("flipped");
        card.style.transform = "perspective(256px) rotateY(180deg)";
        card.querySelector(".front-card").style.transform = "perspective(256px) rotateY(180deg)";
        card.querySelector(".back-card").style.transform = "perspective(256px) rotateY(0deg)";
    }

    cards.forEach(card => {
        card.addEventListener("click", function() {
            if (!card.classList.contains('flipped')) {
                if (flippedCards === 2) {
                    document.querySelectorAll('.flipped').forEach(flippedCard => {
                        flippedCard.classList.remove('flipped');
                        flippedCard.style.transform = "perspective(256px) rotateY(0deg)";
                        flippedCard.querySelector(".front-card").style.transform = "perspective(256px) rotateY(0deg)";
                        flippedCard.querySelector(".back-card").style.transform = "perspective(256px) rotateY(180deg)";
                    });
                    flippedCards = 0;
                }
                flipCard(card);
                flippedCards++;
            }
        });
    });
});
