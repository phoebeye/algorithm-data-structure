/*
Given a roman numeral, convert it to an integer.
Input is guaranteed to be within the range from 1 to 3999.

time complexity: O(n);
*/

const romanToInt = (s) => {
  let lookup = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  let result = 0;
  if (s.length === 1) { //base case: if s.length === 1;
    return result + lookup[s];
  }
  for (let i = 0; i < s.length - 1; i ++) { // s.length need to larger than 2 to initiate the for loop
    let curr = s[i];
    let next = s[i + 1];
    if (lookup[curr] < lookup[next]) {
      result += -lookup[curr];
    } else {
      result += lookup[curr];
    }
    if (i + 1 === s.length - 1) { // need to consider the last element
      result += lookup[next];
    }
  }
  return result;
};