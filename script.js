let playerBalance = 1000;
let machineBalance = 10000;
function introToGame(playerMoney, machineMoney) {
  // alert("Welcome to the FRUIT MACHINE program!");
  // alert("-------------------------------------");
  // alert(
  //   "The aim of the game is to PULL a lever and hope your slots match up with the Machines!"
  // );
  // alert("-------------------------------------");
  // alert("type 'PULL' to generate your selected slots!");
  // alert("-------------------------------------");

  // const pullLever = prompt(
  //   "Are you ready? enter PULL now! ----- type exit to leave game"
  // ).toLowerCase();
  alert(`Your current balance is: ${playerMoney} coins`);
  const bet = prompt("Please enter your bet!");
  const pullLever = "pull";
  playGame(pullLever, playerMoney, machineMoney, bet);
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

  const count = [{}];

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
  const valuesInCount = Object.values(count);
  // accumlator = starting point, set to 0 as second passed value. Current value is each value of array. Each time it iterators through array, the current value will add on to the accumulator!
  const sumOfCount = valuesInCount.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

function playGame(playerChoice, playerMoney, machineMoney, playerBet) {
  // const playerSlots = [generateSlots();

  const playerSlots = [
    { SLOT_1: "Green" },
    { SLOT_2: "Black" },
    { SLOT_3: "Black" },
    { SLOT_4: "Yellow" },
  ];
  if (playerChoice === "pull") {
    // alert(`Your slots are: ${playerSlots}`);
  } else if (playerChoice === "exit") {
    alert("GAME CANCELLED");
    return;
  }

  if (equalityCheck(playerSlots) == true) {
    playerMoney = playerMoney + machineMoney;
    machineBalance = 0;
    alert(
      `WE HAVE A WINNER. 4 MATCHING SLOTS. ----- NEW BALANCE: ${playerMoney}`
    );
  } else if (checkIfAllDifferent(playerSlots) == true) {
    playerMoney = playerMoney + machineMoney / 2;
    machineMoney = machineMoney / 2;
    alert(
      `WE HAVE A WINNER. 4 DIFFERENT SLOTS. ----- NEW BALANCE: ${playerMoney}`
    );
  } else {
    return "LOSER";
  }
}

introToGame(playerBalance, machineBalance);
