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

let n = 5;

console.log(factorial(n));

const reverseString = number => {
    const numberStr = String(number);
    const reversedStr = numberStr.split("").reverse().join("");
    return reversedStr;
}  

console.log(reverseString(4560));

const obj = {
    ism:"Name",
    familiya:"Surname",
    yosh:27
}

console.log(obj);