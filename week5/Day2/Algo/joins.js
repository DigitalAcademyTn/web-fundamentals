var arr1 = [1, 2, 3];
var separator1 = ", ";
var expected1 = "1, 2, 3"

var arr2 = [1, 2, 3];
var separator2 = "-";
var expected2 = "1- 2- 3"

var arr3 = [];
var separator3 = ", ";
var expected2 = ""


function join(arr, sep) {
    var result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
        if (i == arr.length - 1) {
            break
        }

        result += sep
    }

    return result
}

console.log(join(arr1, separator1));