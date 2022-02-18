/*
    The every() method tests whether all elements in the array pass 
        the test implemented by the provided function. 
    It returns a Boolean value.
    every((element, index, array) => { ... })
*/

const positiveNumbers = [1, 2, 3, 4, 5];
const mixedNumbers = [-1, 0, 1, 2, 3];

const allPositive = positiveNumbers.every((item) => {
  return item > 0;
});

const notAllPositive = mixedNumbers.every((item) => {
  return item > 0;
});

//allPositive returns true
console.log('allPositive on positiveNumbers array ? - ' + allPositive);
//notAllPositive returns false
console.log('allPositive on mixedNumbers array ? - ' + notAllPositive);

//check if all items on an array has a specific property defined
const persons = [
  { name: 'Jai' },
  { name: 'Veeru' },
  { name: 'Basanti' },
  { name: 'Thakur' },
  { fullName: 'Gabbar Singh', age: 52 },
];

const hasNameProp = persons.every(
  (person) => typeof person.name != 'undefined'
);

//hasNameProp returns false
console.log('all Persons have a name prop ? - ' + hasNameProp);

//check if each item on an array is an Array

const arrayCollection = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

const mixedCollection = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  { number: 10, number: 11, number: 12 },
];

const areAllArrays = arrayCollection.every((item) => Array.isArray(item));
const areAllArraysAgain = mixedCollection.every((item) => Array.isArray(item));

//areAllArrays returns true
console.log('arrayCollection has all arrays ? - ' + areAllArrays);

//areAllArraysAgain return false
console.log('mixedCollection has all arrays ? - ' + areAllArraysAgain);
