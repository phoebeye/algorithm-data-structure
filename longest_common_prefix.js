// Given a set of strings, find the longest common prefix.

// Input  : {“geeksforgeeks”, “geeks”, “geek”, “geezer”}
// Output : "gee"

// Input  : {"apple", "ape", "april"}
// Output : "ap"

//Time complexity: O(n) for finding the shortest length of str; length of the str (m)* number of strs (n) to find the longest prefix 
//Alternative: user binary search to reduce the finding common to O(nlog m)
const longestCommonPrefix = (strs) => {
  //base case if strs.length === 1;
  if (strs.length === 1) {
    return strs[0];
  }
  //set a variable is longest to store the current longest common prefix
  let currentLongest = '';
  //write a helper function to check if input is a common prefix, return bolean 
  //if true, store input into longest, if not, return the current longest as result
  let checkCommonPrefix = (char, start) => {
    for (let i = 0; i < strs.length; i++) {
    //  console.log(strs[i].charAt(position) !== char, char, 'char', strs[i].charAt(position), 'str[i]')
      if (strs[i].slice(start, char.length) !== char) {
        return false;
      }
    }
    return true;
  };
  //find the shortest str in the arr;
  let shortest = strs.reduce((acc, ele) => {
    if (acc.length < ele.length) {
      acc = ele;
    }
    return acc;
  });

  //check all first x characters of the first str as input
  for (let j = 0; j < shortest[1]; j++) {
    let input = strs[0][j];
    if (checkCommonPrefix(input, j)) {
      currentLongest += input; // if match, continue to add check the input
    } else {
      return currentLongest; // if not, end the for loop by returning the current longest
    }
  }
  return currentLongest;

};





