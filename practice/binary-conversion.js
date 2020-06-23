// *재귀함수 사례 - 2진수 변환

// 2   11  1
// 2   5   1
// 2   2   0
//     1       //=> 1011

let result = '';
let x = 11;
while (true) {
  if (x % 2 == 0) {
    result += '0'; // result = '0' + result; --result위치를 문자열 '0' 뒤에 배치
    //-- 숫자가 아닌 문자열 '0'을 더해주는 것
  } else {
    result += '1';
  }
  x = Math.floor(x / 2); // -- 2로 나눴을 때 소수점 자리가 붙는 경우?
  
  // Math.ceil() : 소수점 올림
  // Math.floor() : 소수점 버림
  // Math.round() : 소수점 반올림

  //<<계속해서 무한반복 되지 않도록 종료조건 걸기>>
  if (x == 1 || x == 0) {
    //(line 22) 맨 마지막의 x 값 - 6번줄의 '1'
    result += String(x); // String() --string값으로 변환
    break; // 종료가 되어야 하기 때문에 break 걸어줌
  }
}
// console.log(result) -> 결과값은 '1101', 즉 반대로 출력됨 -- 해결방안 1) 12번 줄의 주석 해결방안 2) split(),reverse(),join() 메소드 사용
console.log(result.split('').reverse().join('')); //split 메소드 사용 시 array 생성됨

function 이진법(숫자) {
  if (숫자 == 1 || 숫자 == 0) {
    return String(숫자); // break역할 이기 때문에 아래 else 구문 필요없음
  }
  //  return String(숫자 % 2) + 이진법(Math.floor(숫자 / 2));

  // console.log(이진법(11)); // 출력결과: 1101 (반대방향) -> 역순으로 바꿔야함
  return 이진법(Math.floor(숫자 / 2)) + String(숫자 % 2);
}
console.log(이진법(11));

이진법(11)  101 + String(1) // --최종 출력결과 : 1011 (line 32~38 결과로 1101 출력된 이유는 String()이 앞에 있었기 때문!)
이진법(5)   10 + String(1)
이진법(2)   1 + String(0)
이진법(1)   1