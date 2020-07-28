/*
Convert date format(String type) 'YYYY-MM-DD' to 'YYYY년 MM월 DD일'

<Example>   

Input data : 
['2019-03-21', '2019-04-21', '2019-05-21']

return value : 
['2019년 03월 21일', '2019년 04월 21일', '2019년 05월 21일']
*/

let dates = ['2019-03-21', '2019-04-21', '2019-05-21'];
const formatDate = dates.map((x) => {
  let newArr = x.split('-');
  // [ '2019', '03', '21' ], [ '2019', '04', '21' ], [ '2019', '05', '21' ]
  newArr.splice(1, 0, '년 '); // remark: '년 blank', not '년'
  newArr.splice(3, 0, '월 ');
  newArr.splice(5, 0, '일 ');
  // [ '2019', '년 ', '03', '월 ', '21', '일 ' ]
  // [ '2019', '년 ', '04', '월 ', '21', '일 ' ]
  // [ '2019', '년 ', '05', '월 ', '21', '일 ' ]
  let temp = newArr.join('');
  //   2019년 03월 21일
  //   2019년 04월 21일
  //   2019년 05월 21일
  let result = temp.concat();
  return result;
});

formatDate;
// [ '2019년 03월 21일 ', '2019년 04월 21일 ', '2019년 05월 21일 ' ];

// Another solution
const formatDate2 = (dates) => {
  let str = dates.map(function (arr) {
    let date = arr.split('-');
    console.log(`${date[0]}년 ${date[1]}월 ${date[2]}일`);
    return `${date[0]}년 ${date[1]}월 ${date[2]}일`;
  });
  return str;
};

formatDate2(['2019-03-21', '2019-04-21', '2019-05-21']);
