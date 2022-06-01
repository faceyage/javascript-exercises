// const findTheOldest = function(people) {
//     let currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     let oldest = people[0];

//     for (const person of people) {
//         //check if person is still alive
//         if (!person.yearOfDeath)
//             personAge = currentYear - person.yearOfBirth;
//         else
//             personAge = person.yearOfDeath - person.yearOfBirth;
//         if (!oldest.yearOfDeath)
//             oldestAge = currentYear - oldest.yearOfBirth;
//         else
//             oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
            
//         //update oldest
//         if (personAge > oldestAge)
//             oldest = person;
//     }
//     return oldest;
// };

const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const oldest = people.reduce((oldest, person) => {
        const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;
        const personAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
        return oldestAge >= personAge ? oldest : person; 
    }, people[0]);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
