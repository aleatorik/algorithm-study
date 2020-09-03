/*
문제 : 문자열이 주어졌을때, "-"를 기준으로 앞에 있는 문자열을 반환하세요.

예시 : console.log(get_prefix('BTC-KRW')) // --> BTC
*/

function get_prefix(str) {
  let dividedStr = str.split("-");
  let result = dividedStr[0];
  return result;
}

get_prefix("test-over");
