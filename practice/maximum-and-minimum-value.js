// 최소값과 최대값

let a = [10, 20, 30, 1, 2, 3, 5, 9, 11];

a.sort(); // sort() -> 배열을 정렬
console.log(a[0]); // -> 최소값
console.log(a[a.length - 1]); // a 배열의 마지막 값
console.log(a); // 결과: 사전식 정렬로 [1, 10, 11, 2, 20, 3, 30, 5, 9] ,즉 9가 11보다 큰 것으로 정렬됨

console.log(Math.max(10, 20)); //이 메소드에 array 넣으면 NaN 발생
console.log(Math.min(10, 20)); //이 메소드에 array 넣으면 NaN 발생

console.log(Math.max.apply(null, a)); // a배열에서 가장 큰 값 추출됨
console.log(Math.min.apply(null, a)); //     ''     작은  ''

//아래는 최대값 알고리즘
let max = 0;
for (var variable of a) {
  if (variable > max) {
    max = variable;
  }
}
console.log(max);

//아래는 최소값 알고리즘
let min = 999; //주어진 배열의 원소들 보다 커야하므로
for (var variable of a) {
  if (variable < min) {
    min = variable;
  }
}
console.log(min);

//아래는 숫자를 입력하지 않고 등호 방향만 바꿔서 최대,최소값을 구하는 알고리즘
let m = a[0];
for (var variable of a) {
  if (variable > m) {
    m = variable;
  }
}
console.log(m);
