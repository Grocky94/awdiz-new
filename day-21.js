// var target = 93;
// var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7, 91, 1, 1];

// for (var i = 0; i < array.length -2; i++){
//     console.log(array[i])
//     for(var j = i + 1; j < array.length - 1; j++){
//         console.log(array[i], 'array[i]', array[j],'-array[j]')
//         console.log(array[i] + array[j], '-total', target)
//     }
// }

// for (var i = 0; i < array.length - 2; i++){
//     for (var j = 0; j < array.length - 1; j++){
//         for (var k = 0; k < array.length; k++){
//             console.log(array[i], "array[i]", array[j], "array[j]", array[k],"array[k]")
//         }
//     }
// }
// Q . Find 4 numbers from array that addition is target.
// Use nested loop 4 times.
var target = 25;
var array = [2, 3, 5, 5, 32, 54, 23, 12, 45, 23, 43, 1, 34, 65, 1, 54, 6, 33, 4, 9, 7];

for (i = 0; i < array.length - 3; i = i + 1) {
    // console.log(array[i]);
    for (j = 1; j < array.length - 2; j = j + 1) {
        // console.log(array[i] , array[j]);
        for (k = 2; k < array.length - 1; k = k + 1) {
            // console.log(array[i], array[j],array[k]);
            for (l = 3; l < array.length; l = l + 1) {
                let sum = array[i] + array[j] + array[k] + array[l];
                if (sum === target) {
                    console.log(i,"+",j,"+",k,"+",l,"=",target);
                }
            }
        }
    }
}; 

