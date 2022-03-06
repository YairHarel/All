var input = document.querySelector(".input_text");
var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var clouds = document.querySelector(".clouds");
var button = document.querySelector(".submit");
var d;
input.addEventListener("input", function (name) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    input.value +
    "&appid=50a7aa80fa492fa92e874d23ad061374"
  )
    .then((response) => response.json())
    .then((data) => {
      d = data;
      console.log(d);
      var tempValue = data["main"]["temp"];
      var nameValue = data["name"];
      var descValue = data["weather"][0]["description"];

      main.innerHTML = nameValue;
      desc.innerHTML = descValue + " - תיאור";
      temp.innerHTML =
        "טמפרטורה - " + parseFloat(tempValue - 273.15).toFixed(2) + "&#176";
    });
});

let loader = document.querySelector(".preloader");

addEventListener("load", () => {
  setTimeout(() => { loader.style.display = "none"; }, 2000);
});


let menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("hide");
});