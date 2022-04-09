const computerLeftCards = document.getElementById("computer-deck");
const userLeftCards = document.getElementById("user-deck");

const cardFormUpPc = document.getElementById("upper");
const cardFormBottomPc = document.getElementById("buttom");
const cardFormCenterPc = document.getElementById("center");

const cardFormUpUser = document.getElementById("upper-user");
const cardFormBottomUser = document.getElementById("buttom-user");
const cardFormCenterUser = document.getElementById("center-user");

const announcment = document.getElementById("announcment");

const userRandomCards = cards.userRandomDeck();
console.log(userRandomCards);
const computerRandomCards = cards.computerRandomDeck();
console.log(computerRandomCards);

userLeftCards.innerHTML = userRandomCards.length;
computerLeftCards.innerHTML = computerRandomCards.length;

announcment.addEventListener("click", () => {
  if (
    userRandomCards[0].fullCard.includes("♥") ||
    userRandomCards[0].fullCard.includes("♦")
  ) {
    cardFormUpUser.style.color = "red";
    cardFormCenterUser.style.color = "red";
    cardFormBottomUser.style.color = "red";
  } else {
    cardFormUpUser.style.color = "black";
    cardFormCenterUser.style.color = "black";
    cardFormBottomUser.style.color = "black";
  }

  if (
    computerRandomCards[0].fullCard.includes("♥") ||
    computerRandomCards[0].fullCard.includes("♦")
  ) {
    cardFormBottomPc.style.color = "red";
    cardFormCenterPc.style.color = "red";
    cardFormUpPc.style.color = "red";
  } else {
    cardFormBottomPc.style.color = "black";
    cardFormCenterPc.style.color = "black";
    cardFormUpPc.style.color = "black";
  }
  cardFormUpUser.innerHTML = userRandomCards[0].fullCard;
  cardFormCenterUser.innerHTML = userRandomCards[0].shape;
  cardFormBottomUser.innerHTML = userRandomCards[0].fullCard;

  cardFormBottomPc.innerHTML = computerRandomCards[0].fullCard;
  cardFormCenterPc.innerHTML = computerRandomCards[0].shape;
  cardFormUpPc.innerHTML = computerRandomCards[0].fullCard;

  if (userRandomCards[0].cardsValue > computerRandomCards[0].cardsValue) {
    const removeUserCard = userRandomCards.shift();
    const removeComputerCard = computerRandomCards.shift();
    userRandomCards.push(removeUserCard);
    userRandomCards.push(removeComputerCard);
    userLeftCards.innerHTML = userRandomCards.length;
    computerLeftCards.innerHTML = computerRandomCards.length;
    announcment.innerHTML = "player win";
  } else if (
    userRandomCards[0].cardsValue < computerRandomCards[0].cardsValue
  ) {
    const removeUserCard = userRandomCards.shift();
    const removeComputerCard = computerRandomCards.shift();
    computerRandomCards.push(removeUserCard);
    computerRandomCards.push(removeComputerCard);
    userLeftCards.innerHTML = userRandomCards.length;
    computerLeftCards.innerHTML = computerRandomCards.length;
    announcment.innerHTML = "computer win";
  } else if (
    userRandomCards[0].cardsValue === computerRandomCards[0].cardsValue
  ) {
    const removeUserCard = userRandomCards.shift();
    const removeComputerCard = computerRandomCards.shift();
    userRandomCards.push(removeUserCard);
    computerRandomCards.push(removeComputerCard);
    userLeftCards.innerHTML = userRandomCards.length;
    computerLeftCards.innerHTML = computerRandomCards.length;
    announcment.innerHTML = "draw win";
  }
});
