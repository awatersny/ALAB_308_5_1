/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
function reverseString(str) {
  const strArray = str.split("");
  const revArray = strArray.reverse();
  const revString = revArray.join("");
  return revString;
}

function reverseString2(str) {
  return str.split("").reverse().join("");
}

function reverseString3(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

function reverseString4(str) {
  if (str === "") return "";
  else return reverseString4(str.substr(1)) + str.charAt(0);
}

function reverseString5(str) {
  return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
}

// console.log(reverseString("!dlroW olleH"))
// console.log(reverseString2("!dlroW olleH"))
// console.log(reverseString3("!dlroW olleH"))
// console.log(reverseString4("!dlroW olleH"))
// console.log(reverseString5("!dlroW olleH"))

// Take an array of numbers and return the sum.
// Variation of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce?utm_medium=firefox-desktop&utm_source=firefox-suggest&utm_campaign=firefox-mdn-web-docs-suggestion-experiment&utm_content=treatment reduce review
let arrSum = nums => nums.reduce((acc, num) => acc + num)
// Take an array of numbers and return the average.
let arrAvg = nums => nums.reduce((acc, num) => acc * num)/nums.length
// Take an array of strings and return the longest string.
let longest = strs => strs.reduce((acc, str) => acc.length < str.length ? str : acc)
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

const numArr = [1, 2, 3, 4]
const strArr = ['The', 'quick', 'brown', 'fox','jumped', 'over', 'the', 'lazy', 'dog']

console.log(arrSum(numArr))
console.log(arrAvg(numArr))
console.log(longest(strArr))