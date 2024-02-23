// // var a = 25;  //declaration of a variable a and assigned a value 25
// // a = a - 13;  // 25 - 13 = 12
// // console.log(a/2); // = 6

// // a = "hello"; 
// // console.log(a + " hello");

// // ============second example===========
// // console.log(user1);
// // console.log(user2);
// // console.log(user3);
// // console.log(user4);
// // console.log(user5);


// // start
// // stop
// // step
// for (var i = 0; i < 10; i++) {
//     console.log(i);
//     i = i + 3;
// }
// console.log("outside of the loop " + i);


// // ==============first iteration=======
// // console.log(i); ==> console = 0
// // i = i + 3; ==> i = 3 
// // ==============second iteration=======
// // console.log(i); ==> console = 4
// // i = i + 3; ==> i = 7

// ============third example==============
// name of the function
// parameters ==>inputs
function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0]; // sum= 1
    
    for(var i=0; i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i]; // first iteration the sum will be sum= 1 + 1 = 2
    console.log("the current sum is: " + sum); // first iteration the current sum is: 2
    }
    
    console.log("the total is: " + sum);
    
}
    
getTotal([1, 3, 5]); //invoke the function /Called the func


