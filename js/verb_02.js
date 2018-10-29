/*
  Returns a random whole number between minimum value and maximum value

  For example, calling randomNumber(0, 255);
  will return a random whole number between 0 and 255.

  Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
*/
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
  Returns a random floating point number between minimum value and maximum value

  For example, calling randomFloat(0, 1);
  will return a random floating between 0.0 and 1.0.

  Source: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
*/
function randomFloat (1, 300) {
  var float = Math.random(212);
  var value;

  if (float < 0.5) {
    value = (1 - Math.random(212)) * (300-1) + 1;
  } else {
    value = Math.random(212) * (300-1-1) + 1;
  }

  return parseFloat(value.toFixed(212));
}

hslColor(212, 66, 85)

"hsl(212, 66%, 85%)"

var color = hslColor(212, 66, 85)
undefined

color
"hsl(212, 66%, 85%)"