// const leapYears = function(year) {
//     if (year % 4 == 0) {
//         if (year % 100 == 0 && year % 400 != 0)
//             return false;
//         else if (year % 100 == 0 && year % 400 == 0)
//             return true;
//         else
//             return true
//     } 

//     return false;
// };


const leapYears = function(years) {
    if (years % 4 == 0 && years % 100 !== 0){
        return true
    } else if (years % 100 == 0 && years % 400 == 0) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
