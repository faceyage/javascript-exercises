const caesar = function(text, s) {
    cipheredText = "";
    for (const letter of text) {
        let ascii = letter.charCodeAt(0);
        if (ascii >= 97 && ascii <= 122){
            //we first base on alphabetical character (1-26)
            ascii = ((ascii - 97 + s) % 26);
            //if character is negative we increment until positive
            while (ascii < 0) {
                ascii += 26;
            }
            //we turn to alphabetical based 1 - 26 (a - z) to ascii based (97 - 122)
            ascii += 97;
        }
        else if (ascii >= 65 && ascii <= 90) {
            //we first base on alphabetical character (1-26)
            ascii = ((ascii - 65 + s) % 26);
            //if character is negative we increment until positive
            while (ascii < 0) {
                ascii += 26;
            }
            //we turn to alphabetical based 1 - 26 (a - z) to ascii based (65 - 90)
            ascii += 65;
        }
        cipheredText += String.fromCharCode(ascii);
    }
    return cipheredText;
};

// Do not edit below this line
module.exports = caesar;
