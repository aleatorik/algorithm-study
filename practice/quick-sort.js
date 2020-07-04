//퀵정렬(worst - O(nLog2n), best - O(n**2)) --병합정렬과 공통점은 분할정복 사용, 차이점은 pivot값(기준점)을 사용함
let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15]; //pivot값으로 자주 사용되는 것으로는 처음값, 중간값, 마지막 값. 하지만 worst를 피하기 위해 pivot값을 random하게 주는 경우도 있음. pivot을 dual로 주는 경우도 있음. (여기에선 맨 앞의 값으로 pivot 설정)

/*
[66, 77, 54, 32, 10, 5, 11, 15]

pivot값 : 66
[54, 32, 10, 5, 11, 15] + [66] + [77]

pivot값 : 54
[32, 10, 5, 11, 15] + [54] + [66] + [77]

pivot값 : 32
[10, 5, 11, 15] + [32] + [54] + [66] + [77]

pivot값 : 10
[5] + [10] + [11, 15] + [32] + [54] + [66] + [77]

pivot값 : 11
[5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]
*/

function 퀵정렬(입력배열) {
  let 입력배열의길이 = 입력배열.length;

  if (입력배열의길이 <= 1) {
    return 입력배열;
  }

  let 피벗값 = [입력배열.shift()];
  let 그룹하나 = [];
  let 그룹둘 = [];

  for (let i in 입력배열) {
    if (입력배열[i] < 피벗값) {
      그룹하나.push(입력배열[i]);
    } else {
      그룹둘.push(입력배열[i]);
    }
  }

  console.log(
    `그룹하나 : ${그룹하나}\n 그룹둘 : ${그룹둘}\n 피벗값 : ${피벗값}`
  );

  return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘));
}

console.log(퀵정렬(입력값));
