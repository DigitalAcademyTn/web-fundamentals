

var isSunny = true; //boolean
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false; //type: boolean
var whatToBring = "I should bring: "; //string

//----------conditions--------------
if(isSunny) {             // if the condition / if issunny == true execute the next lines
    whatToBring += "sunglasses, ";
}

if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) {
    whatToBring += "an umbrella, ";
}

whatToBring += "and a smile!";
    
console.log(whatToBring);





//***********************************second example************************ */
for(var i=10; i>0; i--) {  // start: 10 stop: i>0 step: -1
    if(i != 2) {    
    console.log(i);
    } else {
    console.log("ignition!");
    }
}
    
console.log("liftoff!");


//***********************************third example************************ */

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for (let index = 0; index < numbers.length; index++) {
   if (numbers[index]>=0) {
    countPositives +=1;
   }
    
}
    
    
console.log("there are " + countPositives + " positive values");
