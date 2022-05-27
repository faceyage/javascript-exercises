const fibonacci = function(step) {
    if (step < 0) return "OOPS"
    let a = 0, b = 1;
    let temp;
    for (let i = 0; i < step; i++) {
        temp = b;
        b = a + b;
        a = temp;
    }
    return a;
    
};

fibonacci(5);
// Do not edit below this line
module.exports = fibonacci;
