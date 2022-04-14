// Question : 1

// function outer() {
//   let a = 0;
//   function inner() {
//     a++;
//     console.log(a);
//   }
//   inner();
// }
// outer();
// outer();

// <-------------------------------------------------------------------------------------------------></->

// Question : 2

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array.prototype.polyShift = function () {
//   let store = this[0];
//   let index = 0;
//   for (var i = 1; i < this.length; i++) {
//     this[index++] = this[i];
//   }
//   this.length--;
//   return store;
// };

// console.log(nums.polyShift());
// console.log(nums.polyShift());

// let x = nums.polyShift();
// console.log(nums);
// nums.polyShift();
// console.log(nums);
// nums.polyShift();
// console.log(nums);

// <-------------------------------------------------------------------------------------------------></->
