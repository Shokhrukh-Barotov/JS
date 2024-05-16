"use strict";
const factorial = n => {
    if (n < 0) {
        return "Musbat son kiriting!";
    }
    else if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }

}

let n = 50

console.log(factorial(n))

const reverseString = number => {
    const numberStr = String(number)
    const reversedStr = numberStr.split("").reverse().join("")
    return reversedStr
}  

console.log(reverseString(1120))

const obj = {
    ism:"Name",
    familiya:"Surname",
    yosh:27
}

console.log(obj)

const word = "opkspjd"

switch (word) {
    case 0:
        console.log("true")
        break;

    default:
        break;
}