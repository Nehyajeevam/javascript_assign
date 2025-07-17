let numbers = [12, 7, 4, 9, 10];
console.log("Even numbers among the 5 inputs:");

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}
