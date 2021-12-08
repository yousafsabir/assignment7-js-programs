var num1 = parseInt(prompt("Enter the First Number:"));
var num2 = parseInt(prompt("Enter the Second Number:"));
var num3 = parseInt(prompt("Enter the Third Number:"));
// Applying the condition here
if (num1 > num2 && num1 > num3) {
  console.log("First number is greater");
} else {
  if (num2 > num1 && num2 > num3) {
    console.log("Secong number is greater");
  } else {
    if (num3 > num1 && num3 > num2) {
      console.log("Third number is greater");
    } else {
      console.log("All are equal");
    }
  }
}
