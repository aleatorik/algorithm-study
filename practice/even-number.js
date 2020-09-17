/*
짝수인지 판별하는 함수 is_even을 작성 주세요.

console.log(is_even(11)) // --> "짝수가 아닙니다"
console.log(is_even(10)) // --> "짝수 입니다"
*/

function is_even(num) {
  if (num % 2 === 0) {
    return "짝수 입니다.";
  } else {
    return "짝수가 아닙니다.";
  }
}

is_even(3);
