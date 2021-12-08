function aDSChar() {
  var aDS = document.getElementById("aDS").value;
  var char = aDS.match(new RegExp(/^[A-Za-z]+$/));
  var digit = aDS.match(new RegExp(/^[0-9]+$/));
  if (aDS == "") {
    alert("Enter a character");
  } else if (char) {
    document.getElementById("aDSR").innerHTML = `${aDS} is an alphabet`;
    console.log(`${aDS} is an alphabet`);
  } else if (digit) {
    document.getElementById("aDSR").innerHTML = `${aDS} is a digit`;
    console.log(`${aDS} is a digit`);
  } else {
    document.getElementById("aDSR").innerHTML = `${aDS} is a special character`;
    console.log(`${aDS} is a special character`);
  }
}
