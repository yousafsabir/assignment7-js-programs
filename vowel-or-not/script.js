var input = prompt("Enter the aphabet");
input = input.toLowerCase();
var check = input.match(new RegExp(/^[A-Za-z]+$/));
if (check) {
  if (
    input == "a" ||
    input == "e" ||
    input == "i" ||
    input == "o" ||
    input == "u"
  ) {
    console.log(`${input} is a vowel`);
  } else {
    console.log(`${input} is not a vowel`);
  }
} else {
  alert("Enter Alphabet");
}
