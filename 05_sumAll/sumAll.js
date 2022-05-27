const sumAll = function(min, max) {
    //check error statements
    if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0) { 
        return "ERROR";
    }
    //swap numbers to make max > min
    if (min > max) { 
        [min, max] = [max, min];
    }
    //main algorithm
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
