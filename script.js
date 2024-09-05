document.addEventListener("DOMContentLoaded", function() {
    let cardsContainer = document.querySelector(".cards-container");
    let cards = document.querySelectorAll(".card");
    let flippedCards = 0;
    let flippedCardNumbers = [];
    let flippedCardElements = [];
    
    cardsContainer.innerHTML = "";
    [...cards].sort(() => Math.random() - 0.5).forEach(card => cardsContainer.appendChild(card));

    function flipCard(card) {
        card.classList.add("flipped");
        card.style.transform = "perspective(256px) rotateY(180deg)";
        card.querySelector(".front-card").style.transform = "perspective(256px) rotateY(180deg)";
        card.querySelector(".back-card").style.transform = "perspective(256px) rotateY(0deg)";
    }

    function unflipCard(card) {
        card.classList.remove("flipped");
        card.style.transform = "perspective(256px) rotateY(0deg)";
        card.querySelector(".front-card").style.transform = "perspective(256px) rotateY(0deg)";
        card.querySelector(".back-card").style.transform = "perspective(256px) rotateY(180deg)";
    }

    function checkMatch() {
        if (flippedCardNumbers.length === 2) {
            const [number1, number2] = flippedCardNumbers;
            if (number1 === number2) {
                setTimeout(() => {
                    flippedCardElements.forEach(card => card.classList.add('matched'));
                    flippedCardNumbers = [];
                    flippedCardElements = [];
                    flippedCards = 0;
                }, 500);
            } else {
                setTimeout(() => {
                    flippedCardElements.forEach(card => unflipCard(card));
                    flippedCardNumbers = [];
                    flippedCardElements = [];
                    flippedCards = 0;
                }, 1000);  
            }
        }
    }

    cards.forEach(card => {
        card.addEventListener("click", function() {
            if (!card.classList.contains('flipped') && flippedCards < 2) {
                flipCard(card);
                flippedCards++;
                flippedCardNumbers.push(card.querySelector(".back-card").textContent);
                flippedCardElements.push(card);
                checkMatch();
            }
        });
    });
});
