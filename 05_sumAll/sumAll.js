const sumAll = function (num1, num2) {


    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0){
        return "ERROR"            
    }

    
    let highValue = 0;

    if (num1 > num2) {
            highValue = num1
    } else {
            highValue = num2
    }


    let add = highValue*(highValue+1)
    let total = add / 2

    return total
}


// Do not edit below this line
module.exports = sumAll;