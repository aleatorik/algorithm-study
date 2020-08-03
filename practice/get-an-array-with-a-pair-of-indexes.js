/*
Get an array with two indexes from a given array that contains a specific value(number) of target variable originated from sum of the array's two values

nums: an array consisting of only number values
target: a value made with sum of two elements from a given array
return: an array having two index numbers

Example)
variable nums has an array [4, 9, 11, 14]
target value is the number '13'

what this case should return is [0, 1]
nums[0] + nums[1] = 4 + 9 = 13

* Condition
The sum sent to target has only two elements from an array
*/

//(어떤 함수에 숫자배열과 '특정 수'를 인자로 넘기면, 더해서 '특정 수'가 나오는 index를 배열에 담아 return 하기)

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        let result = [i, j];
        return result;
      }
    }
  }
};

let nums = [4, 9, 11, 14];
twoSum(nums, 13);
