//varibles
// we make a variable using var, let, or const
var x  // function-scoped variable
let y  // block-scoped variable
const z =20 ; // constant, cannot be reassigned

//where are those string , integer, boolean, and other data types?
let str = "Hello"; 
let num = 42; 
let bool = true; 
let arr = [1, 2, 3]; // array
let obj = { key: "value" }; // object

console.log( typeof num);

//operators
let a=10;
let b=3;
// console.log(a + b); // addition
// console.log(a - b); // subtraction
// console.log(a * b); // multiplication
// console.log(a / b); // division
// console.log(a % b); // modulus (remainder)
// console.log("comparision operators")

//comparison operators
let p=11; //number
let q="10"; //string
console.log("variable p and q types");
console.log(typeof p);
console.log(typeof q);

console.log(p == q); // equality (value)
console.log(p === q); // strict equality (value and type)

//conditional statements
if (p > q) {
    console.log("p is greater than q");
} else if (p < q) {
    console.log("p is less than q");
} else {
    console.log("p is equal to q");
}

// void public main( String[] args)){

// }

//functions in javascript
let name=  "Rohit" 

function greet(xyz){
    console.log("Hello, " + xyz);
}

greet(name); // calling the greet function with the variable xyz greet(name) -> greet("Rohit") -> line number 52 function greet(xyz="Rohit")

function sub(a,b){
    console.log(a - b);
}
sub(10, 20); // calling the add function with the variables a and b

//List arr =new ArrayList<>();
// arr.size() , arr.add() , arr.remove()  case of java

//In JavaScript, we use arrays instead of ArrayList
let fruits = ["apple", "banana", "cherry"]; // array in JavaScript
//console.log(fruits[0]); // print the array
fruits.push("orange"); // add an element to the array

//console.log(fruits); // print the updated array

//lopping
// for (let i = 0; i < fruits.length; i++) {
//     //console.log(fruits[i]);
// }

//basic array operations in JavaScript
// 1 foreach
fruits.forEach(fruit => {
    console.log(fruit);
});

//2 map
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits);

//3 filter
let longFruits = fruits.filter(fruit => fruit.length > 4);
console.log(longFruits);