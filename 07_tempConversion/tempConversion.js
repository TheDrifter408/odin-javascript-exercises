const convertToCelsius = function(fahrenheit) {
  let temp = (fahrenheit - 32);
  let celsius = (temp * (5/9)).toFixed(1);
  return Number(celsius);
};

const convertToFahrenheit = function(celsius) {
  let temp = (celsius * 9/5);
  let fahrenheit = (temp + 32).toFixed(1);
  return Number(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
