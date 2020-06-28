//재귀함수 사례 - 각 자리수의 합
// 반복문)
/*
let result = 0;
let x = '123123';
while (true) {
  if (x.length == 1) {
    result += parseInt(x, 10);
    break;
  }
  let y = x.split(''); 
  result += parseInt(y.pop(), 10); // 문자열이 하나씩 빠지면서 숫자로 더해지는 것
  x = y.join('');
}
console.log(result);
*/

// 재귀함수)

let digit = '';

function sum(digit) {
  if (digit.length == 1) {
    return parseInt(digit, 10);
  }
  console.log(digit.slice(0, digit.length - 1));
  return (
    parseInt(digit[digit.length - 1], 10) +
    sum(digit.slice(0, digit.length - 1))
  );
}
console.log(sum('123123'));
