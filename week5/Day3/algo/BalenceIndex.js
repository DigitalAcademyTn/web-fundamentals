const num1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const num2 = [6, 4, 1, 1, 4];
const expected2 = 1;

const num3 = [4, 1, 1, 4, 6];
const expected3 = 3;


function balance(num) {
    var sum1=0;
    var sum2= 0;
    for (let i = 0; i < num.length; i++) {
        sum2 = 0;
        sum1 += num[i];  
        for (let j = i + 2; j < num.length; j++) {
            sum2 += num[j];
        }   
        if (sum1 == sum2) {
            return i+1
        }
    }
    return -1
}

console.log(balance(num1));
console.log(balance(num2));
console.log(balance(num3));

