/*
3. Longest Substring Without Repeating Characters   QuestionEditorial Solution  My Submissions
Total Accepted: 203307
Total Submissions: 870644
Difficulty: Medium
Contributors: Admin
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

Subscribe to see which companies asked this question
*/


const lengthOfLongestSubstring = (s) => {
  //first solution's time complexity is O(n);
  let strArr = s.split('');
  let len = strArr.length;
  let set = new Set();
  let i = 0;
  let j = 0;
  let longest = 0;
  while (i < len && j < len) { //sliding window
    if (!set.has(strArr[i])) {
      set.add(strArr[i]); // if element does not exist in the set, continue to check the next element
      i++;
      longest = Math.max(j - i, longest); // compare current size of the set and the size of the window
    } else {
      set.delete(strArr[j]); // if element does already exist in the set, delete the very beginning of the set
      j++;
    }
  }
  return longest;
//----------------------------------------------------------
  //second solution's time complexity O(n^2)
  // let nonDuplicate = (arr) => {
  //   let set = new Set (arr);
  //   return set.size === arr.length;
  // };
  // for (let j = 0; j < strArr.length; j++) { // get all the possible substrings and check if duplicate elements exist in the substring
  //   for (let m = j; m < strArr.length; m++) {
  //     let subArr = strArr.slice(j, m + 1);
  //     if (nonDuplicate(subArr)) {
  //       result.push(subArr);
  //     }
  //   }
  // }
  // let longest = result.reduce( (acc, ele, key) => {
  //   if (acc < ele.length) {
  //     acc = ele.length;
  //   }
  //   return acc;
  // }, 0);
  // return longest;
};