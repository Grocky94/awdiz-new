// let digits = [3,9,19]

// var plusOne = function (something) {
//   for (i = something.length - 1; i >= 0; i--) {
//     if (something[i] > 9) {
//       something[i] = something[i] + 1;
//     break;
//     }
//     else {
//       something[i] = 0;
//       if (something[0] == 0) {
//         something[i].push(1);
//       }
//     }
//   } return something;
// }
// console.log(plusOne(digits));

// nums = [-10,-3,0,5,9]

// class Element {
// constructor (val, left, right) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }
// var parent = [];

// function sortedArrayToBST(array){
//  if (array ==  null){
//     return;
//  }
// console.log(array.val + " " );

// sortedArrayToBST(array.left);

// sortedArrayToBST(array.right);

// }


// // parent = new Element ;
// parent.val = new Element(1)
// parent.left = new Element(-3);
// parent.right = new Element(5);
// parent.left.left = new Element(-10);
// parent.right.right = new Element(9);

// sortedArrayToBST(parent);

// let numRows = 5;

// let firstRow = 1;
// let emptyBox = []
// let emptyBox2 = []
// for (firstRow = 1; firstRow <= numRows; firstRow = firstRow + 1) {
//     emptyBox.unshift(firstRow);
// }

// for (let secondRow = 1; secondRow <= numRows ; secondRow = secondRow + 1) {
//         emptyBox2.push(secondRow);
//     }
// // console.log(emptyBox);
// // console.log(emptyBox2);
// emptyBox2[i].push(emptyBox);
// console.log(emptyBox2);

// let numRows = 5

// var generate = function(numRows) {
//     var i = 0;
//     var j = 0;
//     // Create an array list to store the output result...
//     var res = [];
//     // For generating each row of the triangle...
//     for (i = 0; i < numRows; i++) {
//         res.push(Array(i + 1));       // Initialize the first row of the pascal triangle as {1}...
//         for (j = 0; j <= i; j++) {
//             // Primary...
//             if (j === 0 || j === i) {
//                 res[i][j] = 1;
//             }
//             else {
//                 // Calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
//                 res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
//             }
//         }
//     }
//     return res;      // Return the output list of pascal values...
// };
// console.log(generate(numRows));

// grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]

// function island(grid){
//     // let block = 0;
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length, j++;){
//             console.log(grid[i], grid[j]);
//         }
//     }
// return grid
// } 
// island(grid);

grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]

const islandPerimeter = (grid = []) => {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        if (!grid[i - 1] || grid[i - 1][j] !== 1) {
          count += 1
        }
        if (grid[i][j + 1] !== 1) {
          count += 1
        }
        if (!grid[i + 1] || grid[i + 1][j] !== 1) {
          count += 1
        }
        if (grid[i][j - 1] !== 1) {
          count += 1
        }
      }
    }
  }
  return count
}

// create a variable
// inside created a nested loop
// condition if value is = 1 we have to add variable by 4
// if block before is 1 we substract by 2
// if block above is 1 we substract by 2


