/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321
Neet to consider result might be 32-bit interger (From −2,147,483,648 to 2,147,483,647) overflow; if yes, return 0;
*/

const reverse = (x) => {
  let str = x.toString();
  let pre = '';
  if (str.charAt(0) === '-') {
    pre = str.charAt(0);
    str = str.slice(1);
  }
  let arr = str.split('');
  let len = arr.length;
  let mid = Math.floor(len / 2);
  for (let i = 0; i < mid; i++) {
    let temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }
  if ((-2147483648 > Number(pre + arr.join(''))) || (Number(pre + arr.join('')) > 2147483647)) {
    return 0;
  } 
  return Number(pre + arr.join(''));
};