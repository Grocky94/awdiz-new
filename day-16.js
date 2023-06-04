// var person = ['rocky', 'santhosh','ashok','manoj', 'rajveer' ]

// var i;
// for(i=0; i <= person.length; i = i + 1){
//     console.log(person[i]);
// }

// if (){}
// for (initial condition, ending condition; step)

// for (var i = 1; i<= 100 ; i++){
//     console.log("hello", i);
// }



// for (var i = 5; i <= 1000; i = i ** 2) {
//     console.log("Hello", i);
// }

// var target = 93;
// var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7, 91, 1, 1];

// for (var i = 0; i < array.length; i++){
//     // console.log(array[i]);
//     for (var j = 0; j < array.length; j++){
//         for (var k = 0; k < array.length; k++){
//             console.log(array[i], array [j], array[k]);
//         }
//     }
// }

var target = 93;
var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7, 91, 1, 1];

// for (var i = 0; i < array.length -2; i++){
//     console.log(array[i])
//     for(var j = i + 1; j < array.length - 1; j++){
//         console.log(array[i], 'array[i]', array[j],'-array[j]')
//         console.log(array[i] + array[j], '-total', target)
//     }
// }

for (var i = 0; i < array.length - 2; i++){
    for (var j = 0; j < array.length - 1; j++){
        for (var k = 0; k < array.length; k++){
            console.log(array[i], "array[i]", array[j], "array[j]", array[k],"array[k]")
        }
    }
}