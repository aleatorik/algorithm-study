/*
* 문제

숫자인 num을 인자로 넘겨주면, 뒤집은 모양이 num과 똑같은지 여부를 반환해주세요.

num: 숫자
return: true or false (뒤집은 모양이 num와 똑같은지 여부)

예를 들어,
num = 123
return false 
=> 뒤집은 모양이 321 이기 때문

num = 1221
return true 
=> 뒤집은 모양이 1221 이기 때문

num = -121
return false 
=> 뒤집은 모양이 121- 이기 때문

num = 10
return false 
=> 뒤집은 모양이 01 이기 때문
*/

const sameReverse = (num) => {
  let str = num.toString();
  // value값을 비교하기 위해 배열로 각 자릿값을 쪼개야하므로 number -> string
  let arr = str.split('');

  console.log(arr);
  // 변환된 string을 배열로 쪼개기
  let firstDigit = arr.indexOf();
  let lastDigit = arr.lastIndexOf();

  console.log(arr[0]);

  if (arr[0] == '-') {
    return false;
  } else if (firstDigit.valueOf() == lastDigit.valueOf()) {
    return true;
  } else {
    return false;
  }
};

let num = -101;
sameReverse(num);

/*
  -101
  -,1,0,1
  
  1,0,1,-
  101-
  */

// 방법1) '-'가 있으면 제거하고 비교
// 방법2) '-'가 있으면 무조건 false

// indexOf, lastIndexOf
//=>첫번째인자와 마지막인자의 value가 같으면 true, else-> false
// lastIndexOf) 첫 번째 문자의 인덱스는 0이며, 마지막 문자의 인덱스는 str.length -1입니다.

// Another Solution

const sameReverse = (num) => {
  let arr = '' + num;
  let rev = arr.split('').reverse();
  let str = rev.toString().replace(/,/gi, '');
  if (arr === str) {
    return true;
  } else {
    return false;
  }
};
