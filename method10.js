let number = 15;
let i = 2;

console.log("Factors of 15 are:");
while (i <= number) {
  if (number % i === 0) {
    console.log(i);
  }
  i++;
}
