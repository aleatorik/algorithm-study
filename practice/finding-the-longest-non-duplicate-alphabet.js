/*
* 문제 *
String 형인 str 인자에서 중복되지 않은 알파벳으로 이루어진 제일 긴 단어의 길이를 반환해주세요.

str: 텍스트
return: 중복되지 않은 알파벳 길이 (숫자 반환)


예를 들어,
str = "abcabcabc"
return은 3
=> 'abc' 가 제일 길기 때문

str = "aaaaa"
return은 1
=> 'a' 가 제일 길기 때문

str = "sttrg"
return은 3
=> 'trg' 가 제일 길기 때문
*/

const getLengthOfStr = (str) => {
  let sliceStr = [];
  let lastStr = 0;

  for (let i = 0; i < str.length; i++) {
    if (sliceStr.indexOf(str[i]) === -1) {
      sliceStr.push(str[i]);

      if (lastStr < sliceStr.length) {
        lastStr = sliceStr.length;
      }
    } else {
      sliceStr = sliceStr.slice(sliceStr.indexOf(str[i]) + 1);
      sliceStr.push(str[i]);
    }
  }
  return lastStr;
};

var str = 'sttrg';
getLengthOfStr(str);

// Modal Solution
/*
function getLengthOfStr(s) {
    let strArr = [];
    let prevStrArr = [];
    console.log(s)
    for (let i = 0; i < s.length; i++) {
      
      console.log('=======================', i);
      
        let ss = s.slice(i, i+1);
        console.log(' 검사 ss ==> ', ss);
        for (let j = 0; j < strArr.length; j++) {
            if (ss === strArr[j]) {
                
                if (prevStrArr.length < strArr.length) {
                    prevStrArr = strArr.slice();
                    console.log('prevStrArr에 저장', prevStrArr);
                }
                
                strArr = strArr.splice(j+1, strArr.length);
                console.log('자르고 다시 시작 strArr', strArr, j)
                             //splice arr 자르는 함수
                break;
            }
        }
        
        strArr.push(ss);
        console.log('추가한 후 strArr', strArr);
    }
    
    return Math.max(strArr.length, prevStrArr.length);
}

console.log(getLengthOfStr('taaaytts'));
*/
