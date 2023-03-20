'use strict';

/*<!---1-3-TASKS---!>*/
/*<!---CLASSES---!>*/
class University {
    constructor(name, city, rate) {
        this.name = name;
        this.city = city;
        this.rate = rate;
    }
    display() {
        console.log('Uni Name:' + this.name);
        console.log('Uni City:' + this.city);
        console.log('Uni Rate:' + this.rate);
    }
}
class UkrainianUniversity extends University {
    display() {
        console.log('Ukrainian Name:' + this.name);
        console.log('Ukrainian City:' + this.city);
        console.log('Ukrainian Rate:' + this.rate);
    }
}
/*<!---REALISATION---!>*/
const university = new University('Oxford University', 'Oxford in Great Britain', 1);
const ukrainianUniversity = new UkrainianUniversity('Mogylianka', 'Podol', 50);
university.display();
console.log();
ukrainianUniversity.display();
/*<!---BONUS-TASK---!>*/
function findClass(myClass, arr) {
    return arr.filter((newArr) => newArr instanceof myClass);
}
const initialArr = [
    new University('KNU', 'Kyiv', 2),
    { name: 'KPI', city: 'Kyiv', rate: 3},
    new University('UKU', 'Lviv', 1),
    { name: 'KUK', city: 'Kyiv', rate: 999 },
]
const finalArr = findClass(University, initialArr);
console.log(finalArr);