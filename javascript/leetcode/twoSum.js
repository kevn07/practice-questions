/**
  Code by Kevin

  Question: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.

 */

function twoSums(nums, target) {
  const map = new Map;
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      const matchingValue = map.get(complement)
      if (matchingValue !== undefined) {
          return [matchingValue, i]
      }
      map.set(nums[i], i);
  }
}  