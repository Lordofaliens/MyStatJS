var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() 
});

function reverseArr(arr){
    for(let i = 0; i < Math.floor(arr.length / 2); i++)
    {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

let chooseTask = prompt('Choose the task(1-4)');
if(chooseTask=="1")
{
    const a = 10;
    const b = 15;
    console.log(a > b ? a : b);
}
else if(chooseTask=="2")
{
    console.log(prompt("How old are you?"));
}
else if(chooseTask=="3")
{
    let name = prompt("Enter the name:");
    switch(name)
    {
        case "Igor":
            console.log("M");
            break;
        case "Oleg":
            console.log("M");
            break;
        case "Olena":
            console.log("W");
            break;
        case "Nastya":
            console.log("W");
            break;
        default:
            console.log("Name wasn't found in the DataBase.");
    }
}
else if(chooseTask=="4")
{
    let arr = [1,2,3,4,5];
    console.log(reverseArr(arr)); 
}