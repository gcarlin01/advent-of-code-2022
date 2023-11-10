function part1() {
  const fs = require("fs");

  const file = fs.readFileSync(__dirname + "/input", { encoding: "utf8" });

  const calories = file
    .split("\n\n")
    .map((item) => item.split("\n").map((n) => Number(n)));

  const caloriesSum = calories.map((elfCalories) => {
    let sum = 0;

    for (let i = 0; i < elfCalories.length; i++) {
      sum += elfCalories[i];
    }

    return sum;
  });

  const maxCalories = Math.max(...caloriesSum);

  console.log("part 1", maxCalories);
}

function part2() {
  const fs = require("fs");

  const file = fs.readFileSync(__dirname + "/input", { encoding: "utf8" });

  const calories = file
    .split("\n\n")
    .map((item) => item.split("\n").map((n) => Number(n)));

  const caloriesSum = calories.map((elfCalories) => {
    let sum = 0;

    for (let i = 0; i < elfCalories.length; i++) {
      sum += elfCalories[i];
    }

    return sum;
  });

  const sortedCalories = caloriesSum.sort((a, b) => b - a);

  console.log(
    "part 2",
    sortedCalories[0] + sortedCalories[1] + sortedCalories[2]
  );
}

part1();
part2();
