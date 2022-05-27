const add = function(a,b ) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

const multiply = function(numbers) {
  let result = 1;
  for (const num of numbers) {
    result *= num;
  }
  return result;
};

const power = function(a, b) {
	let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
