/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, long = 0, i = 0) {
  if (i === words.length) return long;
  if (words[i].length > long) {
    long = words[i].length
  }
  return longest(words, long, i + 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = "") {
  if (i === str.length) return newStr;
  if (i % 2 === 0) {
    newStr += str[i]
  }
  return everyOther(str, i + 1, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  if (i === str.length) return true;
  return (str[i] === str[str.length - 1 - i]) && isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) {
    return i;
  } else {
    return findIndex(arr, val, i + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, rev = "") {
  if (i === str.length) return rev;
  rev += str[str.length - 1 - i];
  return revString(str, i + 1, rev);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for (item in obj) {
    if ((typeof obj[item]) === "string") {
      arr.push(obj[item]);
    } else if ((typeof obj[item]) === "object") {
      arr = arr.concat(gatherStrings(obj[item]));
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
