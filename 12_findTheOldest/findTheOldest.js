const findTheOldest = function(people) {
    let currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let oldest = people[0];

    for (const person of people) {
        //check if person is still alive
        if (!person.yearOfDeath)
            personAge = currentYear - person.yearOfBirth;
        else
            personAge = person.yearOfDeath - person.yearOfBirth;
        if (!oldest.yearOfDeath)
            oldestAge = currentYear - oldest.yearOfBirth;
        else
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
            
        //update oldest
        if (personAge > oldestAge)
            oldest = person;
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
