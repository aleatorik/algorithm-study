// 선택정렬
let a = [10, 11, 9, 2, 3, 6, 5, 4];
let 정렬된배열 = [];

//  while (a) {
//특정 원소가 사라질 때 까지 반복하는 while문 사용
//  }

for (var i = 0; i < a.length; i++) {
  정렬된배열.push(Math.min.apply(null, a));
  a.splice(a.indexOf(Math.min.apply(null, a)), 1);
  console.log(a);
  console.log(정렬된배열);
}
