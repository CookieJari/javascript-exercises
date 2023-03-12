const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return arr.reduce((count,num) =>count+=num,0 )
};

const multiply = function(arr) {
  return arr.reduce((count,num) =>count*=num,1 )
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  tot = 1;
	for (let index = 1; index <= a; index++) {
    tot*=index;
  }
  return tot;
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
