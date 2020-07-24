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
