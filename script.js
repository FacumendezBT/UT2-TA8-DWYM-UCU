const btn = document.getElementById('btn');
const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
    {
        name: "John",
        yearOfBirth: 1999,
        yearOfDeath: 2022,
    },
    {
        name: "Alice",
        yearOfBirth: 1990,
        yearOfDeath: 2021,
    },
    {
        name: "Bob",
        yearOfBirth: 1995,
        yearOfDeath: 2020,
    },
    {
        name: "Eve",
        yearOfBirth: 1998,
        yearOfDeath: 2023,
    },
];

btn.addEventListener('click', () => {
    findTheOldest(people);
});


/**
 * Encuentra la persona más vieja de la lista de personas
 * que devuelva e imprima en consola aquella persona dentro del parámetro people que sea el que tenga más edad.
 * @param {Array} people - Lista de personas
 */
function findTheOldest(people){
    let oldest = people[0];
    people.forEach(person => {
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        const personAge = person.yearOfDeath - person.yearOfBirth;
        if(personAge > oldestAge){
            oldest = person;
        }
    });
    console.log(oldest);
    return oldest;
}