document.querySelector("#convert-button").addEventListener("click", () => {
  const value = document.querySelector("#value").value;
  const conversionType = document.querySelector("#conversion-type").value;

  let result;
  let unit;
  switch (conversionType) {
    case "Fahrenheit-Celsius":
      result = ((value - 32) * 5) / 9;
      result = result.toFixed(2);
      unit = "Celsius";
      break;
    case "Celsius-Fahrenheit":
      result = (value * 9) / 5 + 32;
      result = result.toFixed(2);
      unit = "Fahrenheit";
      break;
    case "Fahrenheit-Kelvin":
      result = ((value - 32) * 5) / 9 + 273.15;
      result = result.toFixed(2);
      unit = "Kelvin";
      break;
    case "Kelvin-Fahrenheit":
      result = ((value - 273.15) * 9) / 5 + 32;
      result = result.toFixed(2);
      unit = "Fahrenheit";
      break;
    case "Celsius-Kelvin":
      result = value + 273.15;
      result = result.toFixed(2);
      unit = "Kelvin";
      break;
    case "Kelvin-Celsius":
      result = value - 273.15;
      result = result.toFixed(2);
      unit = "Celsius";
      break;
  }

  document.querySelector("#result").textContent = `${result} ${unit}`;
});
