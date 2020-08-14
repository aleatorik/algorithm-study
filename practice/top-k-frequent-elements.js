/*
* 문제
nums는 숫자로 이루어진 배열입니다. 
가장 자주 등장한 숫자를 k 개수만큼 return해주세요.

nums = [1,1,1,2,2,3],
k = 2

return [1,2]

nums = [1]
k = 1

return [1]
*/

function topK(nums, k) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        k += 1;
        result = nums.push(nums[i].shift());
      }
    }
  }
  result = k.push();
  return result;
}

(nums = [1, 1, 1, 2, 2, 3]), (k = 2);

top(nums, k);

// return [1,2]

quantity = arr.length - 1;

result = majority.push();

return result;

// k 개수 -> count를 0부터

// Solution below

function topK(nums, k) {
  let obj = {};
  let arr = [];
  nums.forEach((el) => {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  });
  for (let properyName in obj) {
    arr.push([properyName, obj[properyName]]);
  }
  return arr
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((el) => Number(el[0]));
}
topK([1, 2, 2, 2, 3, 4, 4, 7, 4], 2);
