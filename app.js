let accurateTime = document.querySelector(".accuratetime");
let hour = new Date().getHours();
let min = new Date().getMinutes();
console.log(min);
let summary = document.querySelector(".summary");
let result = document.querySelector(".result");
let calcDiv = document.querySelector(".btn-cont");
let am_pm;

setTimeout(() => {
  if (min < 10) {
    min = "0" + min;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (hour > 12) {
    am_pm = "PM";
  } else {
    am_pm = "AM";
  }
  let timeNow = hour + ":" + min + am_pm;

  accurateTime.textContent = timeNow;
}, 1000);

let firstOperand;
let secondOperand;
let operator;

calcDiv.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let display = result.textContent;
    let key = e.target;
    let keyValue = key.value;

    console.log(keyValue);
    let action = key.dataset.action;

    console.log(action);

    if (!action) {
      if (display == 0) {
        display = keyValue;
        result.textContent = display;
      } else {
        display = display + keyValue;
        result.textContent = display;
      }
    } else {
      if (action == "add") {
        firstOperand = display;
        console.log("i am first operand" + "" + firstOperand);
        result.textContent = "";
        operator = "+";
      }
      if (action == "subtract") {
        firstOperand = display;
        result.textContent = "";
        operator = "-";
      }
      if (action == "multiply") {
        firstOperand = display;
        result.textContent = "";
        operator = "*";
      }
      if (action == "divide") {
        firstOperand = display;
        result.textContent = "";
        operator = "/";
      }
      if (action == "exponential") {
        firstOperand = display;
        result.textContent = "";
        operator = "**";
      }
      if (action == "modulus") {
        firstOperand = display;
        result.textContent = "";
        operator = "**";
      }
      if (action == "clear") {
        result.textContent = "0";
        firstOperand = 0;
        secondOperand = 0;
        operator;
      }
      if (action == "calculate") {
        secondOperand = result.textContent;
        console.log("i am the second operand" + " " + secondOperand);

        if (operator == "+") {
          result.textContent = Number(firstOperand) + Number(secondOperand);

          console.log("i am calculating");
        }

        if (operator == "-") {
          result.textContent = Number(firstOperand) - Number(secondOperand);

          console.log("i am calculating");
        }

        if (operator == "*") {
          result.textContent = Number(firstOperand) * Number(secondOperand);

          console.log("i am calculating");
        }

        if (operator == "/") {
          result.textContent = Number(firstOperand) / Number(secondOperand);

          console.log("i am calculating");
        }

        if (operator == "**") {
          result.textContent = Number(firstOperand) ** Number(secondOperand);

          console.log("i am calculating");
        }

        if (operator == "%") {
          result.textContent = Number(firstOperand) % Number(secondOperand);

          console.log("i am calculating");
        }
      }
    }
  } else {
    console.log("didn't click a button");
  }
});
