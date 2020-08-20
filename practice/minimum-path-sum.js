//"https://leetcode.com/problems/minimum-path-sum/"
/*
문제
양수로 이루어진 m x n 그리드를 인자로 드립니다.
상단 왼쪽에서 시작하여, 하단 오른쪽까지 가는 길의 요소를 다 더했을 때,
가장 작은 합을 찾아서 return 해주세요.

한 지점에서 우측이나 아래로만 이동할 수 있습니다.

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]

Output: 7

설명: 1→3→1→1→1 의 합이 제일 작음
*/

const minPathSum = (grid) => {};

/*
경우의 수 : 5번
형태: 이중배열

[ [1,3,1], [1,5,1], [4,2,1] ]
   a b c    d e f    g h i
   
1→3→1→1→1 a b c f i
1 3 5 1 1 a b e f i
1 3 5 2 1 a b e h i
1 1 5 1 1 a d e f i
1 1 4 2 1 a d g h i
*/

Int16Array;
