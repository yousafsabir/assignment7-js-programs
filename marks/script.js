var chem = parseInt(prompt("Enter Chemistry marks out of 100"));
var phy = parseInt(prompt("Enter Physics marks out of 100"));
var comp = parseInt(prompt("Enter Computer marks out of 100"));
var math = parseInt(prompt("Enter Mathematics marks out of 100"));
var bio = parseInt(prompt("Enter Biology marks out of 100"));

var result = chem + phy + comp + math + bio;
var resPer = (resul * 100) / 600;
if (resPer >= 90) {
  console.log("Grade A");
} else if (resPer >= 80) {
  console.log("Grade B");
} else if (resPer >= 70) {
  console.log("Grade C");
} else if (resPer >= 60) {
  console.log("Grade D");
} else if (resPer >= 40) {
  console.log("Grade E");
} else if (resPer < 40) {
  console.log("Grade F");
}
