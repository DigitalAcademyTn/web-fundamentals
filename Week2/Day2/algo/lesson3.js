// ! --------------------first example---------------
var x = 5;

function setX(newValue) {
    x = newValue;
}

// console.log(x);
// setX(15);
// console.log(x);


// !------------------ example 2 -----------------
// var x = 5;
const pi = 3.14;

function addToPi(amount) {
    var res = pi + amount;
    return res;
    // return x + amount;
    // return result;
    console.log("hello there");
}

// console.log(x);             // x => 5
// var result = addToPi(32);   // result => -5
// console.log(result);        //console: -5
// console.log(x);             // x => 5


// !------------------------ example 3---------------------
/**
* * Is the Array a Palindrome ?
* ! A palindrome is a word that is spelled the same if read forwards or backwards
* ? exmple of a palindrome : 
*           "tacocat"
*/

// TODO: can the values in the array be read the same forwards as backwards ?
var arr1  = [1, 1, 2, 2, 1];

var arr2 = [3, 2, 1, 1, 2, 3];

function isPalindrome(arr) {
    for (let left = 0; left < arr.length/2; left++) {
        var right = arr.length-1-left; // right =5 
        if (arr[left] != arr[right]) {
            return "not Palindrome"
        }
    }
    return "Pal-indrome"
}
var result = isPalindrome(arr1);
console.log(result);

console.log(isPalindrome(arr2));


