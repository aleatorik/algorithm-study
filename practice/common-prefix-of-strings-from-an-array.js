/*
*문제
strs은 단어가 담긴 배열입니다.
공통된 시작 단어(prefix)를 반환해주세요.

예를 들어
strs = ['start', 'stair', 'step']
return은 'st'

strs = ['start', 'wework', 'today']
return은 ''
*/

/*
Approach

/*
condition 1: dealing with string in an array
condition 2: the number of strings in a given array is not defined

strategy: 
1) Divde an array consisting of strings by 'for of loop'
2) Create as many empty arrays as a number of strings from an array at the beginning
3) Put all the strings into each array
4) Check if there's same characters between strings from a number of arrays
by if statement in for loop


const getPrefix = strs => {
  let emptyArr = '';
  
  for(let i = 0; i < strs.length; i++){
  emptyArr = strs.slice(strs.length-1);
  console.log(emptyArr);
  emptyArr = strs.unshift();
  console.log(emptyArr);
  }
  
  
  // const length = strs.length;
  // for(let i = 0; i < length-1; i++){
  //   //주어진 배열의 길이만큼 빈 배열을 생성하기
  // }
  
  const division = strs.join();
  // console.log(division);
  
  
  // for(let i = 0; i < arr.length-1; i++){
  //   if(arr.includes('st')) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  
  // for (let el of arr) {
  //   console.log(el);
  // }
  
  
}

strs = ['start', 'stair', 'step'];
getPrefix(strs);


// join -> split

/*
1. 배열 간의 비교
2. 한 배열 안에서 엘리멘터 간의 비교

*/
