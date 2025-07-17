let limit = 10;
let a = 1, b = 3;

console.log("Fibonacci series up to", limit + ":");

while (a <= limit) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}
