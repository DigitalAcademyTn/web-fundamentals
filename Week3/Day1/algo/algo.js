// var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
// user.push("jello");
// console.log(user);    // ["Dwight", "Schrute", "beetsbears@battlestar.com", "jello"]



// var user = ["Dwight", "Schrute", "beetsbears@battlestar.com", "test"];
// user.pop();
// console.log(user);    // ["Dwight", "Schrute"]



// var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
// console.log(user[0]);    // reading the value -- OUTPUT: Dwight
// user[1] = "Martin";    // updating the value
// console.log(user);    





// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// // var result = animals.splice(4);
// // var result = animals.splice(2,2);
// var result = animals.splice(2,-1);

// console.log(animals);
// console.log(result);


// !remove elements from an array
const arrayOfNumbers = [1, 2, 3, 4];

const previousSecondElementOfTheArray = arrayOfNumbers.splice(1, 3);

// console.log(arrayOfNumbers); // [1, 3, 4]

// console.log(previousSecondElementOfTheArray); // [2]


// ! add elements to an array

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb', 'september');
// Inserts at index 1
// console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// ! update array elements 
months.splice(4, 1, 'May');
// Replaces 1 element at index 4
// console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]



// ? =====================while loop ========================
var start = 0;
var end = 12;
    
while(start < end) {
    // console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}


// !==================first example=============
var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);




// !==================second example=============
var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);


//  !===================third example =================


const str1 = "creature";
const expected1 ="erutaerc";

const str2 = "dog";
const expected2 ="god";

const str3 = "hello";
const expected3 ="olleh";

const str4 = "";
const expected4 ="";


function reverse(str){
    var newStr ="";
    for (var i = str.length-1; i >=0; i--) {
        newStr += str[i];
    }
    return newStr
}

console.log(reverse(str1));