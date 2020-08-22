/*
*문제
s는 여러 괄호들로 이루어진 String 인자입니다.
s가 유효한 표현인지 아닌지 true/false로 반환해주세요.

종류는 '(', ')', '[', ']', '{', '}' 으로 총 6개 있습니다.
아래의 경우 유효합니다.
한 번 괄호를 시작했으면, 같은 괄호로 끝내야 한다.
괄호 순서가 맞아야 한다.

예를 들어 아래와 같습니다.

s = "()"
return true

s = "()[]{}"
return true

s = "(]"
return false

s = "([)]"
return false

s = "{[]}"
return true

https://leetcode.com/problems/valid-parentheses/
*/

function isValid(s) {

}
<1> 주어진 string 괄호 각각을 배열에 담는다
let arr = [];
arr = s.split('');

<2>
1) if('('), else if('['), else if('{')
if조건문에 모든 열린 괄호 형태를 넣는다

2) arr.lastIndexOf(arr.length-1) === '주어진 괄호인자의 닫힘형태'
 return true;

<3> 이중for문 안에 if문으로 안쪽 괄호의 조건(1), (2)를 확인한다
for(let i = 0; i < arr-length-1; i++) {
  for(let j = 0; j < arr-length-1; j++) {
    if(arr.lastIndexOf(arr.length-1) === '주어진 괄호인자의 닫힘형태') {
      return true;
    }
  }
}


 '('
 ')'
 
'['
']'

'{'
'}' 