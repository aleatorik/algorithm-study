// 피보나치 수열
// 1 1 2 3 5 8 13 21 34

// 반복문 for loop
/*
for (var i = 0; i < array.length; i++) {
  array[i];
}
*/
// 1 1 2 3 5 8 13 21 34
let a = 1;
let b = 1;

for (var i = 0; i < 5; i++) {
  let c = a + b;
  a = b;
  b = c;
}
console.log(b);

// 재귀함수

function fibonacci(number) {
  if (number == 1 || number == 2) {
    //위의 예제 첫 번째 항: 1, 두 번째 항: 2
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}
console.log(fibonacci(7));

// fibonacci(5) : fibonacci(4) + fibonacci(3)
// fibonacci(4) : fibonacci(3) + fibonacci(2)
// fibonacci(3) : fibonacci(2) + fibonacci(1)
// fibonacci(2) : fibonacci(1)
// fibonacci(1)

// ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

// fibonacci(5) : 3 + 2
// fibonacci(4) : 2 + 1
// fibonacci(3) : 1 + 1
// fibonacci(2) : 1
// fibonacci(1) : 1

// ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
// 한 줄로 정리
// f(f(f(f(2) + f(1)) + f(2)) + f(f(2) + f(1)))
//f(2)가 반복 => 메모리 효율성 측면에서, 재귀를 하지 말아야 할 것에 해당 -- memorization기법, Dynamic programming 으로 해결
