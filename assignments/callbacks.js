// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"


 
  function getLength(arr, cb) {
    return cb(arr);
    // lgt(items)
    //(itemtLength passes the length of the array into the callback.
  }
  
  function lgt(arr){
    return arr.length;
  }
  
  console.log(getLength(items, lgt));

//!----------------------------------------------------//

function last(arr, cb) {
  return cb(arr);
  // lastItem(items);
// laasses the last item of the array into the callback.
}

function lastItem (arr){
return arr.length - 1;
}

console.log(last(items, lastItem))


//!----------------------------------------------------//

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function calculator(x, y, cb) {
  return cb(x, y);
  
}
let divide = (x, y) => x / y;
let add = (x, y) => x + y;
let multiply = (x, y) => x * y;
let subtract = (x, y) => x - y;
console.log(calculator(2, 4, divide));
// console.log(calculator(2, 4, add));
// console.log(calculator(2, 4, multiply));
// console.log(calculator(2, 4, subtract));
//2000 x lines
let remainder = (x,y) => x % y;
console.log(calculator(14, 3, remainder));

//!----------------------------------------------------//


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y)
  // mltp(x,y);
}

function mltp(a,b){
  return a * b
}

console.log(multiplyNums(4,10,mltp));


//!----------------------------------------------------//

function contains(item,arr, cb) {
  return cb(item,arr);
  // passTrue(item,items)
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

function passTrue(item,arr){
  return arr.includes(item)

  // arr[1,2,3,4,,5]
}

console.log(contains("Orange",items,passTrue))


//!----------------------------------------------------//

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
