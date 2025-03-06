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
let arrAvg = nums => nums.reduce((acc, num) => acc + num)/nums.length
// Take an array of strings and return the longest string.
let longest = strs => strs.reduce((acc, str) => acc.length < str.length ? str : acc)
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
let moreCharsThan = (strs, len) => strs.filter(str => str.length > len)
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNumsFrom(n) {
  // Base/edge case
  if (n < 1) {
    return
  }
  console.log(n)
  printNumsFrom(n-1)
}


const numArr = [1, 2, 3, 4]
const strArr = ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']

console.log(arrSum(numArr))
console.log(arrAvg(numArr))
console.log(longest(strArr))
console.log(moreCharsThan(strArr, 4))
printNumsFrom(20)

const people = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// Sort the array by age.
people.sort((personA, personB) => personA.age - personB.age)
console.log(people)
// Filter the array to remove entries with an age greater than 50.
const overAge50 = people.filter((personA => personA.age > 50) )
console.log(overAge50)
// Map the array to change the “occupation” key to “job” and increment every age by 1.
people.map(person => {
  person.job = person.occupation
  delete person.occupation
  person.age = parseInt(person.age) + 1
})
console.log(people)
// Use the reduce method to calculate the sum of the ages.
let sumOfAges = people.reduce((acc, person) => acc + person.age, 0)
console.log(sumOfAges)
// Then use the result to calculate the average age.
let avgAge = sumOfAges/people.length
console.log(avgAge)

// Take an object and increment its age field.
const incrementAge = function(obj) {
  obj.age++
}
people.map(incrementAge)
console.log(people)
// Take an object, make a copy, and increment the age field of the copy. Return the copy.
const incrementAgeAndCopy = function(obj) {
  const cpyObj = {}
  for(key in obj) {
    cpyObj[key] = obj[key]
  }
  cpyObj.age++
  return cpyObj
}
const peopleNextYear = people.map(incrementAgeAndCopy)
console.log(peopleNextYear)

// Sanity check to make sure I have a deep copy
people[0].age = 19
console.log(peopleNextYear)
// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.

// Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?