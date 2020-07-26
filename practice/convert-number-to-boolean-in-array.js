/*
Convert number to 'true' in array, if the number is greater than or equal to 100,
if that is less than 100, convert the number to 'false' in array.

<Example>   

Input data in array: 
[100, 9, 30, 7]

return data in array : 
[true, false, false, false]
*/

//The solution below is applied by 'forEach' array function

const greaterThan100 = (nums) => {
  let result = [];
  nums.forEach((el) => {
    if (el >= 100) {
      el = 'true';
      result.push(el);
    } else if (el < 100) {
      el = 'false';
      result.push(el);
    }
  });
  return result;
};

let nums = [100, 9, 30, 7];
greaterThan100(nums);

//The solution below is applied by 'map' array function

let test = [100, 9, 30, 7];
let greaterThan100WithMap = test.map((x) => {
  if (x >= 100) {
    x = 'true';
  } else if (x < 100) {
    x = 'false';
  }
  return x;
});

greaterThan100WithMap;
