/*
문제
두 개의 input에 복소수(complex number)가 string 으로 주어집니다.
복소수란 a+bi 의 형태로, 실수와 허수로 이루어진 수입니다.

input으로 받은 두 수를 곱해서 반환해주세요.
반환하는 표현도 복소수 형태의 string 이어야 합니다.

복소수 정의에 의하면 (i^2)는 -1 이므로 (i^2) 일때는 -1로 계산해주세요.

* 제곱 표현이 안 되어 i의 2제곱을 (i^2)라고 표현했습니다.

예제 1:
Input: "1+1i", "1+1i"
Output: "0+2i"
설명: 
(1 + i) * (1 + i) = 1 + i + i + i^2 = 2i 
2i를 복소수 형태로 바꾸면 0+2i.

예제 2:
Input: "1+-1i", "1+-1i"
Output: "0+-2i"
설명: 
(1 - i) * (1 - i) = 1 - i - i + i^2 = -2i, 
-2i를 복소수 형태로 바꾸면 0+-2i.

예제 3:
Input: "1+3i", "1+-2i"
Output: "7+1i"
설명: 
(1 + 3i) * (1 - 2i) = 1 - 2i + 3i -6(i^2) = 1 + i + 6, 
7+i를 복소수 형태로 바꾸면 7+1i.

가정
input은 항상 a+bi 형태입니다.
output도 a+bi 형태로 나와야 합니다.
*/

const complexNumberMultiply = (a, b) => {
  firstArg = a.split("+");
  secondArg = b.split("+");

  console.log(firstArg);

  let a1 = Number(firstArg[0]);
  let a2 = Number(firstArg[1]); // 수정필요
  let b1 = Number(secondArg[0]);
  let b2 = Number(secondArg[1]); // 수정필요

  // (1 + i) * (1 + i) = 1 + i + i + i^2 = 2i
  // return (a1 * b1 - a2 * b2)+(a1 * b2 + a2 * b1)*i
};

const a = "1+1i";
const b = "1+1i";
complexNumberMultiply(a, b);

/*
  일단 문제에서 말했듯 string으로 받고 마지막에 string으로 출력을 합니다.
  
  그리고 input과 output이 모두 같은 점을 이용하여
  2개의 argument들의 input을 split() 함수를 이용해 '실수' 부분과 '허수' 부분으로 나누어줍니다.
  
  그리고 '실수'와 '허수'를 int형을 바꿔줍니다.
  물론 여기서 '허수' 부분은 뒤에 i를 index를 이용하여 버려줍니다.
  
  왜냐하면 일단 int형으로 바꿔주고 계산후, output의 형태가 input과 같이
  복소수의 형태이기 때문에 마지막에 계산이 다 끝나고 int형의 타입들을 str형으로 바꿔주고 i를 추가 후
  리턴해주면 되기 때문입니다.
  
  그리고 input값으로는 무조건 +는 들어오는데 만약 허수부분이 음수가 들어온다면 '+-' 와 같은 형태로
  들어오기 때문에 이 점에 유의해서 로직을 짜줘야 합니다.
  
  사실 제가 짠 로직도 '복소수'를 '실수'와 '허수'로 나눠주는 함수의 로직이 이상해 보일 수 있지만,
  이 문제에 대해서 만큼은 전혀 지장이 없습니다.
  
  */
