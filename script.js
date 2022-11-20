let playerBalance = 1000;
let machineBalance = 10000;
function introToGame() {
  //   alert("Welcome to the FRUIT MACHINE program!");
  //   alert("-------------------------------------");
  //   alert(
  //     "The aim of the game is to PULL a lever and hope your slots match up with the Machines!"
  //   );
  //   alert("-------------------------------------");
  //   alert("type 'PULL' to generate your selected slots!");
  //   alert("-------------------------------------");

  //   const pullLever = prompt(
  //     "Are you ready? enter PULL now! ----- type exit to leave game"
  //   ).toLowerCase();

  const pullLever = "pull";

  return playGame(pullLever, playerBalance, machineBalance);
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

function playGame(playerChoice, playerMoney, machineMoney) {
  alert(`Your current balance is: ${playerMoney} coins`);
  //   const playerSlots = generateSlots();
  const playerSlots = [
    { SLOT_1: "Black" },
    { SLOT_2: "Yellow" },
    { SLOT_3: "Black" },
    { SLOT_4: "White" },
  ];
  if (playerChoice === "pull") {
    // const playerSlots = generateSlots();
  } else if (playerChoice === "exit") {
    alert("GAME CANCELLED");
    return;
  }

  function equalityCheck(arr) {
    const firstValue = Object.values(arr[0]).join("");
    return arr.every(function (index) {
      return Object.values(index).join("") === firstValue;
    });
  }

  if (equalityCheck(playerSlots) == true) {
    playerMoney = playerMoney + machineMoney;
    alert(
      `WE HAVE A WINNER. 4 MATCHING SLOTS. ----- NEW BALANCE: ${playerMoney}`
    );
  }
}

introToGame();