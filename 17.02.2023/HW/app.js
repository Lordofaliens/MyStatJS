var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() 
});

function getString(arr){
    return arr.map(row => row.map(num => String(num)));
}
function getObjectKeys(arr) {
    let ans = [];
    for(let i = 0; i < arr.length; i++)
    {
        for(let [key, value] of Object.entries(arr[i]))
        {
            let arrElem = [];
            key = key.toString();
            arrElem.push(key);
            arrElem.push(value);
            ans.push(arrElem);
        }
    }
    return ans;
}
function sort(arr){
    arr.sort((a,b)=>a-b);
    return arr;
}
function invertedSort(arr){
    arr.sort((a,b)=>b-a);
    return arr;
}

let chooseTask = prompt('Choose the task(1-3)');
if(chooseTask=="1")
{
    const arr = [[1,2,3], [4,5,6]];
    console.log(getString(arr));
}
else if(chooseTask=="2")
{
    const arr1 = [{name: "Igor", age: 20}, {name: "Oleg", age: 40}];
    console.log(getObjectKeys(arr1));
}
else if(chooseTask=="3")
{
    const arr2 = [1,10, 3, 5, 9];
    console.log(sort(arr2));
    console.log(invertedSort(arr2));
}