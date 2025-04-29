//*==========================================================================*//
//*                      INICIALIZAR VARIABLES GLOBALES                      *//
//*==========================================================================*//

const cardsContainer = document.querySelector(".cards-container");
const cards = document.querySelectorAll(".card");

let flippedCardCount = 0;
let flippedCardsValues = [];
let flippedCardNodes = [];


//*==========================================================================*//
//*                     INSERTAR CARTAS EN EL CONTENEDOR                     *//
//*==========================================================================*//

const values = ["😠", "🙁", "😦", "😂", "😭", "😀", "😍", "😎"];
const cardValues = [...values, ...values];

cardValues.sort(() => Math.random() - 0.5);

cardValues.forEach( cardValue => {
    const card = document.createElement("div");
    card.classList.add("card");

    const index = cardValues.indexOf(cardValue);
    card.style.animationDelay = `${index * 30}ms`;

    card.addEventListener("animationend", () => {
        card.style.animation = "none";
        card.style.animationDelay = "";
    });
    
    const frontCard = document.createElement("div");
    frontCard.classList.add("front-card");
    frontCard.textContent = "?";
    
    const backCard = document.createElement("div");
    backCard.classList.add("back-card");
    backCard.textContent = cardValue;
    
    card.appendChild(frontCard);
    card.appendChild(backCard);
    cardsContainer.appendChild(card);

    card.addEventListener( "click", () => {
        if (card.classList.contains('flipped') || flippedCardCount === 2) return;

        flipCard(card);

        flippedCardCount++;
        flippedCardsValues.push(card.querySelector(".back-card").textContent);
        flippedCardNodes.push(card);

        checkMatch();
    });
});


//*==========================================================================*//
//*                           FUNCIONES AUXILIARES                           *//
//*==========================================================================*//

function checkMatch() {
    if (flippedCardsValues.length !== 2) return;

    const [value1, value2] = flippedCardsValues;
    
    if (value1 === value2) {
        setTimeout(() => {
            flippedCardCount = 0;
            flippedCardsValues = [];
            flippedCardNodes = [];
        }, 500); 
    }

    else {
        setTimeout(() => {
            flippedCardNodes.forEach( card => unflipCard(card));
            flippedCardCount = 0;
            flippedCardsValues = [];
            flippedCardNodes = [];
        }, 500);  
    }
}

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
