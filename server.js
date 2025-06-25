console.log(this);

//values and data type

// primitive data type

// - how to store numbers: 2,3,4,4.5, 56
// - String: "PW Skills" or 'PW Skills'
// - Boolean: true, false
// - null
// - undefined  let a;


// - Non Premitive Data Types
// - Array

let name1 = "hitesh"
let name2 = "VIPIN"
let name3 = "anjali"
let name4 = "chandan"

let names = ["hitesh", "susant", "rohit", "kaif", 2,3,false];


// - Object: {}


let myName = "hitesh" // age ja kr agar kuch or bhi declear karna ho toh ham usse let declear karenge
const myName3 = "vipin"// aage ja kr agar kuch declear nhii karna ho toh hum const declear karenge
                       // const hame bug se bohot bachata hai

let highScore = 300
console.log(highScore)


let pwSkillsCoursePrice = 3500
console.log(pwSkillsCoursePrice);


let userBankBalance = 5000 // this is a bank balance

pwSkillsCoursePrice = 6000
console.log(pwSkillsCoursePrice);

let CoursePrice = 200
const GST = 36
let FinalPrice = CoursePrice + GST;
console.log("Final amout to be paid ", FinalPrice);


let pwDsaCourse = 500;
console.log("final price of DSA course is ", pwDsaCourse + GST)
console.log("Answer1 is:", 5 % 2) // 5 modulo 2
console.log( "Answer2 is: ",5 / 2);
console.log( "Answer3 is: ",3 ** 2); // use to the power

let vipinHighScore = 300
let chanduHighScore = 300
console.log(vipinHighScore == chanduHighScore);

let value1 = true
let vakue2 = false
let value3 = true
let value4 = false
console.log(value1 && value3); //And(&&) ke ander dono vale agar true hogi tabhi wo true dega
                               // OR(||) ke andr agar ek bhi value true hogi toh wo true dega

//alert(3 + 3);// we are using in node js  not browsers
console.log(typeof value4);
console.log(typeof undefined);// undefined
console.log(typeof null);// objest
