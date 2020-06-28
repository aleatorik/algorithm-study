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

// 아래는 순서대로 출력됨
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
