const ftoc = function(degree) {
  formula = (degree - 32) * 5/9;
  return Math.round(formula * 10) / 10;
};

const ctof = function(degree) {
  formula = (degree * 9/5) + 32
  return Math.round(formula * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
