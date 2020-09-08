/*
Selection Sort(선택정렬)
정렬 알고리즘은 순서가 없던 데이터를 순서대로 바꾸어 나열하는 알고리즘입니다.
정렬을 하는 방법은 여러가지가 있는데, 그 중에 유명한 알고리즘은 아래 4가 있습니다.
선택정렬
버블정렬
삽입정렬
퀵정렬 

오늘은 선택정렬을 배우겠습니다. 
선택정렬은 정렬되지 않은 데이터 중 가장 작은 데이터를 선택해서
맨 앞에서부터 순서대로 정렬해 나가는 알고리즘입니다.

영어 설명 한 번 보시죠!
It has O(n2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort.
Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

예제를 통해 보겠습니다.

[](https://storage.googleapis.com/replit/images/1557746152134_b1a747dd1240085e2c57f7eedaed1d3e.pn);

정렬을 해야하는 배열은 [7,5,4,2] 입니다. 

첫 번째 loop에서는 index 0부터 3까지 확인하며 가장 작은 수를 찾습니다.
2 이므로 index 0의 7과 교체합니다. -> [2,5,4,7]


두 번째는 index 1부터 3까지 확인하며 가장 작은 수를 찾습니다.
4이므로 index 1의 5와 교체합니다 -> [2,4,5,7]

세 번째는 index 2부터 3까지.. 이런식으로 가장 작은 수를 선택해서 순서대로 교체하는 것을 선택정렬이라고 합니다.



* 문제

nums라는 정렬되지 않은 숫자 배열을 주면, 오름차순(1,2,3..10) 으로 정렬된 배열을 return해주세요.

*/

// 선택정렬
let a = [10, 11, 9, 2, 3, 6, 5, 4];
let 정렬된배열 = [];

//  while (a) {
//특정 원소가 사라질 때 까지 반복하는 while문 사용
//  }

for (var i = 0; i < a.length; i++) {
  정렬된배열.push(Math.min.apply(null, a)); // 정렬된 배열에 최소값 순서대로 넣기
  a.splice(a.indexOf(Math.min.apply(null, a)), 1); // a 배열 정리 --최소값 인덱스 찾고, 그 최소값 인덱스 자리 삭제
  console.log(a);
  console.log(정렬된배열);
}

// (모범답안)

const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let minIdx = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIdx] > nums[j]) {
        minIdx = j;
      }
    }

    let temp = nums[i];
    nums[i] = nums[minIdx];
    nums[minIdx] = temp;
  }

  return nums;
};

// (다른사람 답안)

function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let swap = nums[minIndex];
      nums[minIndex] = nums[i];
      nums[i] = swap;
    }
    console.log(`${i}회전: ${nums}`);
  }
  return nums;
}
console.log(selectionSort([5, 4, 3, 2, 1]));
