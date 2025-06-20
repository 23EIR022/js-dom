// let newObject = {
//     name: "Dhanu",
//     display: function() {
//         console.log("Hello");
//     }
// }
// newObject.display();

// // types of console Methods used:
//   console.log()
//   console.warn()
//   console.error()
//   console.table()
//    console.time()
//     // console object Methods
//   console.log("Hello JS!");
//   console.warn("This is a warning");
//   console.error("Something went wrong");
//   console.table([{name:"alice"},{name:"bob"}]);
//   console.time("loop");
//   for (let i=0;i<100000;i++){ }
//   console.timeEnd("loop");

//   // eval() function - don't use in live projects
//   const x =10;
//   const y=20;
//   const result = eval("x+y");
//   console.log(result);

//   // strict Mode
//   "use strict";
//   let a = 10;
//   b = 20;

let greatestvalue=(1>2) ? 1 : 2;
console.log(greatestvalue);

// && guard operator
let a =(1>2) && 5;

// || - default operator
let input;
let b = input || 4;
console.log(b);

// falsy values
// 0 ''NaN  undefined null