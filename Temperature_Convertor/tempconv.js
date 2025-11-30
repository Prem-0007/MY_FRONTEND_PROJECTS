const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
  let temp = Number(textBox.value);

  if (toFahrenheit.checked) {
    temp = temp * 9/5 + 32;
    result.textContent = temp + " °F";
  } else if (toCelsius.checked) {
    temp = (temp - 32) * 5/9;
    result.textContent = temp.toFixed(2) + " °C";
  } else {
    result.textContent = "Select a unit";
  }
}