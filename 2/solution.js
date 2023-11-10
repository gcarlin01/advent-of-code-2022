const fs = require("fs");
const lines = fs
  .readFileSync(__dirname + "/input", { encoding: "utf-8" })
  .split("\n");

const CHOICE = {
  ROCK: "ROCK",
  PAPER: "PAPER",
  SCISSORS: "SCISSORS",
};

function getChoice(char) {
  if (char === "A" || char === "X") {
    return CHOICE.ROCK;
  }

  if (char === "B" || char === "Y") {
    return CHOICE.PAPER;
  }

  if (char === "C" || char == "Z") {
    return CHOICE.SCISSORS;
  }
}

function getRoundScore(round) {
  const opp = round[0];
  const me = round[1];

  if (me === CHOICE.PAPER) {
    const weight = 2;
    let result = 0;

    if (opp === CHOICE.ROCK) {
      result = 6;
    } else if (opp === CHOICE.SCISSORS) {
      result = 0;
    } else {
      result = 3;
    }

    return result + weight;
  }

  if (me === CHOICE.ROCK) {
    const weight = 1;
    let result = 0;

    if (opp === CHOICE.SCISSORS) {
      result = 6;
    } else if (opp === CHOICE.PAPER) {
      result = 0;
    } else {
      result = 3;
    }

    return result + weight;
  }

  if (me === CHOICE.SCISSORS) {
    const weight = 3;
    let result = 0;

    if (opp === CHOICE.PAPER) {
      result = 6;
    } else if (opp === CHOICE.ROCK) {
      result = 0;
    } else {
      result = 3;
    }

    return result + weight;
  }
}

function part1() {
  const rounds = lines.map((round) =>
    round.split(" ").map((i) => getChoice(i))
  );

  const roundScores = rounds.map((round) => getRoundScore(round));

  let sum = 0;
  roundScores.forEach((num) => (sum += num));

  console.log("part 1", sum);
}

part1();
