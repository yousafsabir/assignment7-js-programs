function characterAlpha() {
  var alphaC = document.getElementById("alphaC").value;
  var findCA = alphaC.match(new RegExp(/^[A-Za-z]+$/));
  if (alphaC === "") {
    alert("Enter a Character");
  } else if (findCA) {
    document.getElementById("alphaCR").innerHTML = `${alphaC} is a character`;
    console.log("Character", alphaC);
  } else {
    document.getElementById(
      "alphaCR"
    ).innerHTML = `${alphaC} is not a character`;
    console.log("Not a character", alphaC);
  }
}
