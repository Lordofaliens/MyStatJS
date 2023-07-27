'use strict';
var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')()
});
/*<!---FUNCTIONS--!>*/
function foo1() {
    let a = Math.random() * 100;
    let b = Math.random() * 100;
    return a + b;
}
function foo2() {
    let a = Math.random() * 10;
    let b = Math.random() * 10;
    return a * b;
}
function task1(f1, f2) {
    const result = {};
    result.result1 = f1();
    result.result2 = f2();
    return result;
}
function task2(a, b) {
    let aStr = a.toString();
    let bStr = b.toString();
    if (aStr.length > bStr.length) {
        return a;
    }
    else {
        return b;
    }
}
/*<!---MAIN--!>*/
while (true) {
    console.log('Choose the task from 1 to 2: ');
    choice = parseInt(prompt(''));
    if (choice == 1) {
        console.log(task1(() => foo1(), () => foo2()));
    }
    else if (choice == 2) {
        let a = parseInt(prompt("Enter the first number:"));
        let b = parseInt(prompt("Enter the second number:"));
        console.log(task2(a, b));
    }
    let quit = prompt("Do you want to quit?");
    if (quit == "yes" || quit == "y") {
        process.exit();
    }
}