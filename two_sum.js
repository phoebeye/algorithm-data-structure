/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/


//time complexity: O(n^2)
const twoSum = (nums, target) => {
  let one;
  let two;
  for (let i = 0; i < nums.length; i++) {
    let j = target - nums[i];
    if (nums.indexOf(j) !== -1 && nums.indexOf(j) !== i) {
      one = i;
      two = nums.indexOf(j);
      break;
    }
            
  }
  return ([]).concat(one, two);
};


/*
if you can use HashTable, then time complexity would reduce to O(n); 
build hashtable using value as key, index as value; hashtable lookup time is O(1);
*/