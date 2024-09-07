const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  if(nums.length === 1){
    return nums[0];
  }
	let total = nums.reduce((total,currentItem) => {
    return total + currentItem;
  },0);
  return total;
};

const multiply = function(nums) {
  let total = nums.reduce((total,currentItem) => {
    return total * currentItem;
  },1);
  return total;
};

const power = function(base,power) {
  let total = 1;
  while(power > 0){
    total *= base;
    power--;
  }
  return total;
};

const factorial = function(num) {
	let total = 1;
  if(num === 0){
    return total;
  }
  while(num > 0){
    total *= num;
    num--;
  }
  return total;
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
