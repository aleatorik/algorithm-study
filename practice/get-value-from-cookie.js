// Assignment
//Find a value of key from 'practice_cookie' in the current webpage

const getCookie = () => {
  let result = '';
  const str = document.cookie;
  const words = str.split(';');
  words.forEach((element) => {
    if (element.includes('practice_cookie')) {
      const cookie = element.split('=');
      result = cookie[1];
    }
  });
  return result;
};

/* Another solution with for loop

const getCookie = () => {
    const str = document.cookie;
    const words = str.split(";");
    console.log("words: ",words);
    let arrOfWecode = [];
    for(let i = 0; i < words.length; i++) {
      if(words[i].includes('wecode_cookie') === true) {
        let indexOfWecode = words[i].indexOf('wecode_cookie');
        arrOfWecode = words[i].splice(indexOfWecode);
      }
        let dividedArr = arrOfWecode.splice("=");
        let result = dividedArr[1];
    }
    return result;
}

*/
