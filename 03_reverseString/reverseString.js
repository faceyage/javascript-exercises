// const reverseString = function(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// };

const reverseString = function(str) {
    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
