const palindromes = function (str) {
    const reversedStr = str.split("").reverse().filter(char => isAlpha(char)).join("").toLowerCase();
    str = str.split("").filter(char => isAlpha(char)).join("").toLowerCase();
    if (str === reversedStr)
        return true;
    return false
};

function reverseString (str) {
    let newStr = str.split("");
    newStr = newStr.reverse();
    newStr = newStr.join("");
    return newStr;
}

function isAlpha (character) {
    return /^[A-Z]/i.test(character)
}

// Do not edit below this line
module.exports = palindromes;
