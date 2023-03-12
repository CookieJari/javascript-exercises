const findTheOldest = function(people) {
    
    return people.reduce(function(oldest, person){ 
        var oldestAge = GetAge(oldest.yearOfBirth, oldest.yearOfDeath);
        var personAge = GetAge(person.yearOfBirth, person.yearOfDeath);
        return oldestAge > personAge ? oldest : person;
    })
};

const GetAge = function(birth,death){
    if (!death) {
        return new Date().getFullYear()-birth;
    }
    return death-birth;
};

// Do not edit below this line
module.exports = findTheOldest;
