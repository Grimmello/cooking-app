var gallonsLiter = function(gallon) {
  return gallon * 3.78;
};



var litersGal = function(liter) {
  return liter * 0.26;
};

var teaspoon = function(tablespoon) {
  return tablespoon * 3;
};

var tablespoon = function(teaspoon) {
  return teaspoon * 0.333333;
};

var oz = function(cup) {
  return cup * 8;
};

var cup = function(oz) {
  return oz * 0.125;
};

var userInput = parseInt(prompt("Enter the number of teaspoons you wish to convert to Tablespoons."));

var result = tablespoon(userInput);


alert(" The Conversion is : " + result);
