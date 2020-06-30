/*
let result = '';
let x = 'daniel';
while (true) {
  if (x.length == 1) {
    result += x; //
    break;
  }
  let y = x.split('');
  console.log(y);
  result += String(y.pop()); //string에는 pop이 없음(array에 pop이 있음), 그러므로 split() 사용
  x = y.join('');
  console.log(x);
}
console.log(result);
//console.log(result.split('').reverse().join(''));
*/
// 위에는 역순으로 출력됨

// 아래는 정순으로 출력됨
//방법1: result = '0' + result;
//방법2: console.log(result.split('').reverse().join(''));
let result = '';
let x = 'daniel';
while (true) {
  if (x.length == 1) {
    result = x + result;
    break;
  }
  let y = x.split('');
  console.log(y);
  result = String(y.pop()) + result; //string에는 pop이 없음(array에 pop이 있음), 그러므로 split() 사용
  x = y.join('');
  console.log(x);
}
console.log(result);

/*
function 문자열역순(문자) {
  if (문자.length == 1) {
    return 문자;
  }
  console.log(문자.slice(0, 문자.length - 1));
  return 문자[문자.length - 1] + 문자열역순(문자.slice(0, 문자.length - 1));
  //         ㄴ문자열 마지막 문자           ㄴ문자열 마지막 문자 제외한 나머지 문자열
}

console.log(문자열역순('daniel'));
/*
문자열역순('daniel') 'l' + 문자열역순('danie') -> l+einad
문자열역순('danie')  'e' + 문자열역순('dani') -> e+inad
문자열역순('dani')   'i' + 문자열역순('dan') -> i+nad
문자열역순('dan')    'n' + 문자열역순('da') -> n+ad
문자열역순('da')     'a' + 문자열역순('d') -> a+d
문자열역순('d')      'd' 
*/
