window.playerBalance = 1000;
window.machineBalance = 5000000;

function introToGame(playerMoney) {
  alert("Welcome to the FRUIT MACHINE program!");
  alert("-------------------------------------");
  alert(
    "The aim of the game is to PULL a lever and hope your slots match up with the Machines!"
  );
  alert("-------------------------------------");
  alert("type 'PULL' to generate your selected slots!");
  alert("-------------------------------------");

  const pullLever = prompt(
    "Are you ready? enter PULL now! ----- type exit to leave game"
  ).toLowerCase();
  alert(`Your current balance is: ${playerMoney} coins`);
  playGame();
}

function generateSlots() {
  const slotsValues = [];

  for (let i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * 4 + 1);
    switch (randomNumber) {
      case 1:
        slotsValues.push("Green");
        break;
      case 2:
        slotsValues.push("Yellow");
        break;
      case 3:
        slotsValues.push("Black");
        break;
      case 4:
        slotsValues.push("White");
        break;
    }
  }
  const slotsAsObj = [
    { SLOT_1: slotsValues[0] },
    { SLOT_2: slotsValues[1] },
    { SLOT_3: slotsValues[2] },
    { SLOT_4: slotsValues[3] },
  ];

  return slotsAsObj;
}

function equalityCheck(arr) {
  const firstValue = Object.values(arr[0]).join("");
  return arr.every(function (index) {
    return Object.values(index).join("") === firstValue;
  });
}

function checkIfAllDifferent(arr) {
  const objAsArray = [];

  const count = {};

  for (let i = 0; i < arr.length; i++) {
    objAsArray.push(Object.values(arr[i]).join(""));
  }
  for (const element of objAsArray) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }

  // console.log(count);

  // if these adds to 4, this means each index is different
  let singleOccurance = 0;

  Object.values(count).forEach((val) => {
    if (val === 1) {
      singleOccurance++;
    } else {
      singleOccurance;
    }
  });

  const result = singleOccurance !== 4 ? false : true;
  return result;
}

function checkForAdjacent(arr) {
  if (
    Object.values(arr[0]).join("") === Object.values(arr[1]).join("") &&
    Object.values(arr[2]).join("") === Object.values(arr[3]).join("")
  ) {
    return true;
  } else {
    return false;
  }
}

function playGame() {
  //pre-game functionality -> selecting a bet and pulling the lever to generate slots.
  let playerSlots;
  const bet = parseInt(prompt("please provide a bet"));

  const pullOrExit = prompt(
    "PULL THE LEVER!! ------ (type exit to quit...)"
  ).toLowerCase();

  if (pullOrExit === "pull") {
    playerSlots = generateSlots();
  } else if (pullOrExit === "exit") {
    alert(
      `You have quit the game..... Goodbye! ------ You have walked away with ${window.playerBalance}`
    );
    return;
  }
  //functionality of the game -> the comparison functions

  //4 matching slots -> player wins all machine money
  if (equalityCheck(playerSlots) == true) {
    window.playerBalance += window.machineBalance;
    window.machineBalance = 0;
    alert(
      `WE HAVE A WINNER. 4 MATCHING SLOTS. ----- NEW BALANCE: ${window.playerBalance}`
    );
    //4 different slots -> player wins half the machine money
  } else if (checkIfAllDifferent(playerSlots) == true) {
    window.playerBalance += window.machineBalance / 2;
    window.machineBalance += window.machineBalance / 2;
    alert(
      `WE HAVE A WINNER. 4 DIFFERENT SLOTS. ----- NEW BALANCE: ${window.playerBalance}`
    );
    //2 matching adjacent slots -> player wins 5 x the bet
  } else if (checkForAdjacent(playerSlots) == true) {
    const checkFor5X = window.machineBalance >= bet * 5 ? true : false;
    checkFor5X === true
      ? (window.playerBalance += bet * 5)
      : window.playerBalance;
    alert(
      `WE HAVE A WINNER. 2 ADJACENT SLOTS CONFIRMED. X5 PAYOUT ----> NEW BALANCE ${window.playerBalance}`
    );
  } else {
    console.log("loser");
  }

  const playAgain = prompt("Would you like to play again?").toLowerCase();

  playAgain === "yes" ? playGame() : alert("game over...");
}

introToGame(playerBalance, machineBalance);
