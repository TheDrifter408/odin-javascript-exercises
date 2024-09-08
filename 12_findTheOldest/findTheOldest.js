function age(person){
    let name = person.name;
    let age = 0;
    if(person.hasOwnProperty('yearOfDeath')){
        age = person.yearOfDeath - person.yearOfBirth;
    } else {
        age = new Date().getFullYear() - person.yearOfBirth;
    }
    return {
        name,age
    }
}
const findTheOldest = function(people) {
    let person = people.map((person) => age(person)).reduce((acc,val) => {
        return acc.age < val.age ? val : acc;
    });
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
