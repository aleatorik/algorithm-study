/*
find_longest_word 함수를 만들어 주세요.

주어진 리스트안에 있는 단어중 가장 긴 단어를 찾을수 있도록 함수를 완성해주세요.
console.log(find_longest_word(["PHP", "Exercises", "Backend"])) 
// --> "Exercises"
*/

function find_longest_word(list) {
  let longestStr = list[0];
  for (let i in list) {
    if (longestStr.length < list[i].length) {
      longestStr = list[i];
    }
  }
  return longestStr;
}

find_longest_word(["PHP", "Exercises", "Backend"]);
