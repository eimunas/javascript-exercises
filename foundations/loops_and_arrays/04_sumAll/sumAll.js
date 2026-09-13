const sumAll = function(a, b) {
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';

  if (a > b) {
    const temp = a;
    a = b;
    b = temp;
  }

  return (a + b) * (b - a + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
