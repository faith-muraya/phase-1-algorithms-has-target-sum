function hasTargetSum(array, target) {
  const seen = new Set();

  for (let num of array) {
    const difference = target - num;

    if (seen.has(difference)) {
      return true;
    }

    seen.add(num);
  }

  return false;
  e;
}

/* 
 The function iterates through the input array once, where 'n' is the length of the array.
 The set operations (add and has) are constant time on average, so they do not significantly affect the overall time complexity.
*/

/* 
  Create an empty set called 'seen' to keep track of seen values.
  Iterate through the elements 'num' in the input array.
  Calculate 'difference' as 'target - num'.
  Check if 'difference' is in the 'seen' set. If it is, return true.
  Otherwise, add 'num' to the 'seen' set.
  If the loop completes without finding a pair, return false.
*/

/*
  The function uses a set to efficiently keep track of the numbers seen so far while iterating through the array.For each element 'num', it calculates the 'difference' between the target and 'num'.If 'difference' is found in the 'seen' set, it means there exists a pair of numbers in the array that adds up to the target, so the function returns true If no such pair is found after iterating through the entire array, the function returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
