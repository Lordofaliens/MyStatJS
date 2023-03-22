var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() 
});

let numbers = [2, 3, 4, 5, 6];

function foo(nums){
    return nums * 2;
} 
function map(arr, func){
    for(let i = 0; i < arr.length; i++)
    {
        arr[i] = func(arr[i]);
    }
    return arr;
}
function getPositive(num){
    if(num<0)
    {
        return num*(-1);
    }
    else
    {
        return num;
    }
}
function getObjectKeys(obj) {
    createdObject = JSON.parse(obj);
    return Object.keys(createdObject);
}

let chooseTask = prompt('Choose the task(1-3)');
if(chooseTask=="1")
{
    let num = parseInt(prompt('Enter the number:'));
    console.log(getPositive(num));
}
else if(chooseTask=="2")
{
    let inputObject = prompt('Enter the object:');
    console.log(getObjectKeys(inputObject));
}
else if(chooseTask=="3")
{
    // example with an array of numbers and function to multiply by 2 all the elements
    console.log(map(numbers, foo));
}