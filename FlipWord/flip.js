/* call the cards class */
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false; 
let lockBoard = false;
let firstCard, secondCard;

/* flip card function to  */
function flipCard() {
  if (lockBoard) return; /* if you're using this board, prevent other cards to flip  */
  if (this === firstCard) return; /* store card on flipCard()  */
  this.classList.add('flip'); // add css animation to card on flipCard()
  if (!hasFlippedCard) { // if not true, set true and return flipped card.
    hasFlippedCard = true; 
    firstCard = this; // this is the flipped card which is then returned
    return;
  }
  secondCard = this; // if it is true, check second card, or asign the second card flipped to flipCard()
  checkForMatch();
}

function checkForMatch() { /* check if card flipped one matches second flipped card */
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() { /* Time the animation of the cards being flipped is going to last */
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() { 
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() { // The cards are arrange in a random order every time you restart.
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));