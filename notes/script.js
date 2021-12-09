function notesCheck() {
  var input = document.getElementById("amount").value;
  if (input == 0) {
    alert("Please Refresh the page and Enter the Amount first");
  }
  var a1 = 0;
  var a2 = 0;
  var a3 = 0;
  var a4 = 0;
  var a5 = 0;
  var a6 = 0;
  var a7 = 0;

  function func5000() {
    var b1 = input % 5000;
    var c1 = input - b1;
    a1 = c1 / 5000;
    input = input % 5000;
  }
  function func1000() {
    var b2 = input % 1000;
    var c2 = input - b2;
    a2 = c2 / 1000;
    input = input % 1000;
  }
  function func500() {
    var b3 = input % 500;
    var c3 = input - b3;
    a3 = c3 / 500;
    input = input % 500;
  }
  function func100() {
    var b4 = input % 100;
    var c4 = input - b4;
    a4 = c4 / 100;
    input = input % 100;
  }
  function func50() {
    var b5 = input % 50;
    var c5 = input - b5;
    a5 = c5 / 50;
    input = input % 50;
  }
  function func20() {
    var b6 = input % 20;
    var c6 = input - b6;
    a6 = c6 / 20;
    input = input % 20;
  }
  function func10() {
    var b7 = input % 10;
    var c7 = input - b7;
    a7 = c7 / 10;
    input = input % 10;
  }

  if (input >= 5000) {
    func5000();
    func1000();
    func500();
    func100();
    func50();
    func20();
    func10();
  } else if (input >= 1000) {
    func1000();
    func500();
    func100();
    func50();
    func20();
    func10();
  } else if (input >= 500) {
    func500();
    func100();
    func50();
    func20();
    func10();
  } else if (input >= 100) {
    func100();
    func50();
    func20();
    func10();
  } else if (input >= 50) {
    func50();
    func20();
    func10();
  } else if (input >= 20) {
    func20();
    func10();
  } else if (input >= 10) {
    func10();
  }

  var result = a1 + a2 + a3 + a4 + a5 + a6 + a7;
  document.getElementById(
    "notesOutput"
  ).innerHTML = `Result: ${result} is the total number of notes. For details, head to the console`;
  console.log(`Total of ${result} Currency Notes are required`);
  console.log("of which");
  if (a1 != 0) {
    if (a1 == 1) {
      console.log(`${a1} Rs-/5000 Note`);
    } else {
      console.log(`${a1} Rs-/5000 Notes`);
    }
  }
  if (a2 != 0) {
    if (a2 == 1) {
      console.log(`${a2} Rs-/1000 Note`);
    } else {
      console.log(`${a2} Rs-/1000 Notes`);
    }
  }
  if (a3 != 0) {
    if (a3 == 1) {
      console.log(`${a3} Rs-/500 Note`);
    } else {
      console.log(`${a3} Rs-/500 Notes`);
    }
  }
  if (a4 != 0) {
    if (a4 == 1) {
      console.log(`${a4} Rs-/100 Note`);
    } else {
      console.log(`${a4} Rs-/100 Notes`);
    }
  }
  if (a5 != 0) {
    if (a5 == 1) {
      console.log(`${a5} Rs-/50 Note`);
    } else {
      console.log(`${a5} Rs-/50 Notes`);
    }
  }
  if (a6 != 0) {
    if (a6 == 1) {
      console.log(`${a6} Rs-/20 Note`);
    } else {
      console.log(`${a6} Rs-/20 Notes`);
    }
  }
  if (a7 != 0) {
    if (a7 == 1) {
      console.log(`${a7} Rs-/10 Note`);
    } else {
      console.log(`${a7} Rs-/10 Notes`);
    }
  }
}
