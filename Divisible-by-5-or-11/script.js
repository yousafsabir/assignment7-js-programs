var input = parseInt(prompt("Enter the number"));

if (input % 5 == 0) {
  console.log("The number is divisible by 5");
} else if (input % 11 == 0) {
  console.log("The number is divisible by 11");
} else {
  console.log("The number is not divisible by either 5 or 11");
}
