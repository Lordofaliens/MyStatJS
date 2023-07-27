'use strict';
var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() 
});
/*<!---FUNCTIONS--!>*/
function task1() {

    let sum = 0;
    console.log('Enter 5 numbers:');
    for (let i = 0; i < 5; i++) {
        sum += parseInt(prompt(''));
    }
    return sum / 5;
}
function task2() {
    console.log('Enter a number:');
    let input = parseInt(prompt(''));
    let func = (input) => input * input;
    return func(input);
}
function task3() {
    console.log('Enter a string:');
    const str = prompt('');
    let newStr = str.replace(/#/g, "");
    return newStr;
}
function task4() {
    let inputStr1 = prompt("Enter the first array (separate elements by commas): ");
    let arr1 = inputStr1.split(",");
    const sum1 = arr1.reduce((partialSum, a) => partialSum + a, 0);
    inputStr1 = prompt("Enter the second array (separate elements by commas): ");
    let arr2 = inputStr1.split(",");
    const sum2 = arr2.reduce((partialSum, a) => partialSum + a, 0);
    if (sum1 < sum2) {
        return arr2;
    }
    else {
        return arr1;
    }
}
function Person(name, age, city, skills) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.skills = skills;

    this.addSkill = function (skill) {
        this.skills.push(skill);
    }
}
function task5() {
    const name = prompt("Enter person's name:");
    const age = prompt("Enter person's age:");
    const city = prompt("Enter person's city:");
    let skills = prompt("Enter person's skills(separate elements by commas): ");
    let skillArr = skills.split(",");
    const person = new Person(name, age, city, skillArr);
    let addSkill = prompt("Add some skills?");
    if (addSkill == "yes" || addSkill == "y") {
        let newSkills = prompt("Enter person's new skills(separate elements by commas): ");
        let newArr = newSkills.split(",");
        for (let i = 0; i < newArr.length; i++) {
            person.addSkill(newArr[i]);
        }
    }
    return person;
}
/*<!---MAIN--!>*/
const OutputArray = [
    'Invalid input. Please enter a number from 1 to 5.',
    task1,
    task2,
    task3,
    task4,
    task5
];
let choice = 0;
while (true) {
    console.log('Choose the task from 1 to 5: ');
    choice = parseInt(prompt(''));
    console.log(OutputArray[choice]());
    let quit = prompt("Do you want to quit?");
    if (quit == "yes" || quit == "y") {
        process.exit();
    }
}

