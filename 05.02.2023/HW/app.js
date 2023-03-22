var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() 
});

function getNum(arr){
    arr = arr.map(elem => parseInt(elem));
    return arr;
}
function getLetters(arr){
    arr = arr.map(elem => elem[0]);
    return arr;
}
function GetKyiv(arr){
    return arr.indexOf("Kyiv");
}

let chooseTask = prompt('Choose the task(1-3)');
if(chooseTask=="1")
{
    const arr = ["1", "2", "4", "7"];
    console.log(getNum(arr));
}
else if(chooseTask=="2")
{
    const arr1 = ["Poland", "Ukraine", "USA"];
    console.log(getLetters(arr1));
}
else if(chooseTask=="3")
{
    const arr2 = ["Lviv", "Kyiv", "Poltava"];
    console.log(GetKyiv(arr2));
}