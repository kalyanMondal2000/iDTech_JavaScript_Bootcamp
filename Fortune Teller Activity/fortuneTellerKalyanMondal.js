//Kalyan Mondal

// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE


// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE

let fortune = 8;
let fortuneType;
console.log("Fortune selected: "+fortune);
if(fortune >= 0 && fortune <= 3){
    fortuneType = "low";
    console.log("Your fortune is "+fortuneType)
}else if(fortune > 3 && fortune <= 7){
    fortuneType = "average"
    console.log("Your fortune is "+fortuneType)
}else if(fortune > 7 && fortune <= 10){
    fortuneType = "high"
    console.log("Your fortune is "+fortuneType)
}else{                                                   
    console.log("Invalid")
}



