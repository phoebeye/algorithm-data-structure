//Determine whether an integer is a palindrome. Do this without extra space.
// time complexity: O(n) depends on number of digits in the integer
const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  let num = x;
  let rev = 0;
  while (num > 0) { 
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }
  return rev === x;
};