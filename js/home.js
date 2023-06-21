function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


document.querySelector("#marketing").addEventListener("click", filterMarketing);
document.querySelector("#programing").addEventListener("click", filterPrograming);
document.querySelector("#desing").addEventListener("click", filterDesing);

  
function filterMarketing() {
    hideAllCards();
  
  var marketingCards = document.querySelectorAll(".marketing");
  marketingCards.forEach(marketingCard => {
    marketingCard.style.display = "block"
  });
  
}

function filterPrograming() {
  hideAllCards();

  var programingCards = document.querySelectorAll(".programing");
  
    programingCards.forEach(programingCard => {
    programingCard.style.display = "block"
  });
}

function filterDesing() {
  hideAllCards();

  var desingCards = document.querySelectorAll(".desing");
    desingCards.forEach(desingCard => {
    desingCard.style.display = "block"
  });
}

function hideAllCards() {
  var allCards = document.querySelectorAll(".card--box");

  allCards.forEach(card => {
    card.style.display = "none"
  });
}
