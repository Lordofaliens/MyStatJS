'use strict';
/*<!---CLASSES---!>*/
class SuperArr extends Array {
    at(index) {
        if (isNaN(index) || index >= this.length || index < -1 * this.length) {
            console.log("Index is outside of the array.");
        }
        else if (index >= 0) {
            const result = {};
            result.element = this[index];
            result.arr = this;
            return result;
        }
        else {
            const result = {};
            result.element = this[this.length+index];
            result.arr = this;
            return result;
        }
    }
    copy() {
        return this.slice()
    }
}
class privateClass {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    
    makePublicField(variable) {
        if (variable === 'name') {
            this.name = this.#name;
        } else if (variable === 'age') {
            this.age = this.#age;
        } else {
            console.error(`Variable ${variable} not found`);
        }
    }
    getPrivateName() {
        return this.#name;
    }
    getPrivateAge() {
        return this.#age;
    }
}
/*<!---MAIN---!>*/
const superArr = new SuperArr(5, 7, 8, 9, 3, 2, 1, 4);
/*<!---1.1-TASK---!>*/
console.log('TASK1.1');
console.log(superArr.at(3));
console.log(superArr.at(-2));
console.log(superArr.at(10));
/*<!---1.2-TASK---!>*/
console.log('TASK1.2');
let copiedArr = superArr.copy();
copiedArr[0] = -1;
console.log(superArr);
console.log(copiedArr);
/*<!---2.-TASK---!>*/
console.log('TASK2');
let privateclass = new privateClass('vlad', 17);
console.log(privateclass.getPrivateName());
console.log(privateclass.getPrivateAge());
console.log(privateclass.name); // should be undefined since private
console.log(privateclass.age); // should be undefined since private
privateclass.makePublicField('name');
console.log(privateclass.name);
console.log(privateclass.age); // should be undefined since private
privateclass.makePublicField('age');
console.log(privateclass.name);
console.log(privateclass.age);