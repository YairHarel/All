let menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
  if (menuBtn.style.backgroundColor == document.querySelector(".body").style.backgroundColor)
    menuBtn.style.backgroundColor = "var(--background-color)";
  else {
    if (document.body.classList.contains("dark-theme"))
      menuBtn.style.backgroundColor = document.querySelector(".body").style.backgroundColor;
    else
      menuBtn.style.backgroundColor = document.querySelector(".body").style.backgroundColor;

  }

});


let loader = document.querySelector(".preloader");

addEventListener("load", () => {
  setTimeout(() => { loader.style.display = "none"; }, 2000);
});

let icon = document.getElementById("mode");

//שינוי מוד תצוגה
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme"))
    icon.src =
      "https://cdn1.iconfinder.com/data/icons/interface-59/24/brightness-light-up-day-mode-512.png";
  else icon.src = "https://static.thenounproject.com/png/1664849-200.png";
};

let result = 0;
const resDisplay = document.querySelector(".h1");
const opDisplay = document.querySelector(".op");
let dotFlag = true;
let last = "v";
let all = document.querySelector(".h5");
opDisplay.innerHTML = "op"


const setOutput = () => {
  if (event.target.innerHTML === "." && dotFlag) {
    resDisplay.innerHTML += event.target.innerHTML;
    all.innerHTML += event.target.innerHTML;
    if (isNaN(last))
      dotFlag = false;
  } else if (event.target.innerHTML === ".") {

  } else {
    all.innerHTML += event.target.innerHTML
    if (isNaN(last) && last != '.')
      resDisplay.innerHTML = Number(event.target.innerHTML);
    else
      resDisplay.innerHTML = Number(resDisplay.innerHTML + event.target.innerHTML);
  }
  last = event.target.innerHTML;
};

const setOp = () => {
  dotFlag = true;
  result = calc(result, Number(resDisplay.innerHTML), opDisplay.innerHTML);
  resDisplay.innerHTML = "";
  resDisplay.innerHTML = result;
  opDisplay.innerHTML = event.target.innerHTML;
  all.innerHTML += event.target.innerHTML
  last = event.target.innerHTML;
};

const Calculate = () => {
  resDisplay.innerHTML = calc(result, Number(resDisplay.innerHTML), opDisplay.innerHTML);
  dotFlag = true;
  opDisplay.innerHTML = "=";
  result = 0;
};

const delDigit = () => {
  resDisplay.innerHTML = resDisplay.innerHTML.length === 1 ? 0 : strRemoveLastChar(resDisplay.innerHTML);
  all.innerHTML = all.innerHTML.length === 1 ? "" : strRemoveLastChar(all.innerHTML);
};

const delOutput = () => {
  resDisplay.innerHTML = 0;
  dotFlag = true;
};

const delAll = () => {
  resDisplay.innerHTML = 0;
  opDisplay.innerHTML = "op";
  all.innerHTML = "";
  result = 0;
  dotFlag = true;
};


const strRemoveLastChar = (str) => {
  str = str.substring(0, str.length - 1);
  return str;
};

const calc = (a, b, op) => {
  let t;
  switch (op) {
    case "+":
      t = a + b;
      break;
    case "-":
      t = a - b;
      break;
    case "*":
      t = a * b;
      break;
    case "/":
      t = b === 0 ? 0 : a / b;
      break;
    default:
      t = b;
  }
  if (result != 0)
    all.innerHTML += " = " + t;
  return t;
}


// let result = 0;
// let second = false;
// let dot = false;
// let start = true;
// let all = document.querySelector(".h5");
// const op = document.querySelector(".op");
// const output = document.querySelector(".h1");

// //הצגת פלט המספרים על המסך
// const setOutput = () => {
//   all.innerHTML += event.target.innerHTML;
//   if (event.target.innerHTML === ".") {
//     if (event.target.innerHTML === "." && !dot) {
//       output.innerHTML += event.target.innerHTML;
//       dot = true;
//     }
//     second = false;
//     return;
//   }

//   if (start && second) {
//     dot = false;
//     output.innerHTML += event.target.innerHTML;
//     second = false;
//     return;
//   }

//   if (start) {
//     dot = false;
//     output.innerHTML = Number(output.innerHTML + event.target.innerHTML);
//     start = false;
//     return;
//   }


//   if (second) {
//     dot = false;
//     output.innerHTML = Number(event.target.innerHTML);
//     result = 0;
//     second = false;
//     return;
//   }
//   else {
//     output.innerHTML += event.target.innerHTML;
//     return;
//   }


// };


// //חישוב התוצאה והצגתה על המסך
// const Calculate = () => {
//   let t = Number(output.innerHTML);
//   switch (op.innerHTML) {
//     case "+": {
//       result += t;
//       break;
//     }
//     case "-": {
//       result -= t;
//       break;
//     }
//     case "/": {
//       result /= t;
//       break;
//     }
//     case "*": {
//       result *= t;
//       break;
//     }
//     default: {
//       result = t;
//       break;
//     }
//   }
//   second = true;
//   if (Number(result) === result && result % 1 === 0);
//   else
//     result = parseFloat(result).toFixed(2);
//   all.innerHTML += " = " + result;
//   output.innerHTML = result;
//   op.innerHTML = "=";
// };

// //שמירת האופרטור שנילחץ במשתנה גלובלי
// const setOperator = () => {
//   if (result) {
//     start = true;
//   }
//   let t = event.target.innerHTML;
//   switch (t) {
//     case "+":
//       op = t;
//     case "-":
//       op = t;
//     case "/":
//       op = t;
//     case "*":
//       op = t;
//   }
//   output.innerHTML = result;
// };

// const delAll = () => {
//   result = 0;
//   output.innerHTML = 0;
//   op.innerHTML = "op";
//   all.innerHTML = "";
//   dotFlag = false;
//   start = true;
//   second = false;
// };

// const delOutput = () => {
//   output.innerHTML = 0;
//   dotFlag = false;
//   start = true;
// };

// const delDigit = () => {
//   if (output.innerHTML.length === 1) {
//     output.innerHTML = 0;
//     op.innerHTML = "op";
//     start = true;
//     second = false;
//     all.innerHTML = ""
//   }
//   else {
//     if (output.innerHTML != "") {
//       all.innerHTML = all.innerHTML.substring(0, all.innerHTML.length - 1);
//     }
//     output.innerHTML = strRemoveLastChar(output.innerHTML);
//   }
// };

// const strRemoveLastChar = (str) => {
//   str = str.substring(0, str.length - 1);
//   return str;
// };

// //הצגת סוג האופרטור על המסך
// const setOp = (x) => {
//   // if (result == 0 || second)
//   //   result = Number(output.innerHTML);

//   Calculate();
//   all.innerHTML = all.innerHTML + " " + event.target.innerHTML;
//   output.innerHTML = "";
//   op.innerHTML = event.target.innerHTML;
//   setOperator();
// };






























// let epend = false;
// output = document.querySelector(".h1").innerHTML;
// if (x == 1 && !epend) {
//   output = output.substring(0, output.length - 1);
//   if (output == "") {
//     output = 0;
//     document.querySelector(".op").innerHTML = "op";
//     start = true;
//     middle = false;
//   } else {
//     result = output;
//     document.querySelector(".op").innerHTML = "op";
//   }
//   epend = true;
// }
// if (x == 2 && !epend) {
//   output = document.querySelector(".h1").innerHTML = 0;
//   document.querySelector(".op").innerHTML = "op";
//   start = true;
//   middle = false;
//   epend = true;
// }
// if (x == 0 && !epend) {
//   result = output = 0;
//   start = true;
//   middle = false;
//   epend = true;
// }
// if (start && !result && !epend) {
//   output = event.target.innerHTML;
//   document.querySelector(".op").innerHTML = "op";
//   start = false;
//   epend = true;
// } else if (result && !middle && !epend) {
//   output = event.target.innerHTML;
//   document.querySelector(".op").innerHTML = "op";
//   middle = true;
//   epend = true;
// } else if (result && middle && !epend) {
//   output += event.target.innerHTML;
//   epend = true;
// }

// if (!epend) {
//   if (event.target.innerHTML === '.') {
//     if (!output.includes("."))
//       output += event.target.innerHTML;
//   }
//   else
//     output += event.target.innerHTML;



// }
// document.querySelector(".h1").innerHTML = output;








//Yoram!


// let res = 0;
// const resDisplay = document.querySelector(".h1");
// const opDisplay = document.querySelector(".op");
// let dotFlag = true;

// const setResult = () => {
//   if (event.target.innerHTML === "." && dotFlag) {
//     resDisplay.innerHTML += event.target.innerHTML;
//     dotFlag = false;
//   }
//   else if (event.target.innerHTML === ".") {

//   }
//   else
//     resDisplay.innerHTML = Number(resDisplay.innerHTML + event.target.innerHTML);
// };

// const setOp = () => {
//   opDisplay.innerHTML = event.target.innerHTML;
//   dotFlag = true;
//   res = Number(resDisplay.innerHTML);
//   resDisplay.innerHTML = "";
// };

// const setTotal = () => {
//   resDisplay.innerHTML = calc(res, Number(resDisplay.innerHTML), opDisplay.innerHTML);
//   dotFlag = true;
//   opDisplay.innerHTML = "";
//   res = 0;
// };

// const calc = (a, b, op) => {
//   let t;
//   switch (op) {
//     case "+":
//       t = a + b;
//     case "-":
//       t = a - b;
//     case "/":
//       t = a / b;
//     case "*":
//       t = a * b;
//   }
//   return t;
// };
