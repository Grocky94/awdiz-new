
// console.log('first');
// console.log('second');
// setTimeout(() =>  { console.log('third')}, 2000);

// console.log('first');
// setInterval(() => {console.log('received interval for 5s')} ,5000);
// console.log('third');

// function afterCall() {
//     return new Promise(something => {
//         setTimeout(() => {
//             something('friend');
//         }, 5000);
//     });
// }

// async function recall() {
//     console.log('calling');
//     const answer = await afterCall();
//     console.log(answer);
//     console.log('Got connected after 5s');
//     // Expected output: "something"
// }

// recall();


// function toUnderstand() {
//     const member = new Promise((answer) => {
//         setInterval(() => {answer('calling')}, 1000)
//     })
//     return member;
// }

// let myFunction = async () => {
    // console.log('print first');
    // const call = await toUnderstand();
    // console.log(call);
    // console.log('print second');
// }
// console.log('print third');
// myFunction();
// myFunction();

// var rocky = new Array ;
// var pooja = [];


let obj1 = { name : "rocky" , Num : 12345}
// console.log(obj1.name)

for (let x in obj1){
    console.log(`${x} : ${obj1[x]}`);
    console.log(obj1);
}
// console.log(typeof(rocky));

