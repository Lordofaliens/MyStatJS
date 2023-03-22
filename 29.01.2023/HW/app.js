var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() 
});

function getStr(obj){
    for (let prop in obj) 
    {
        if(typeof obj[prop] != 'string')
        {
            delete obj[prop];
        }
    }
    return obj;
}
function getLong(arr){
    let maxElem, max = 0;
    for(let elem of arr)
    {
        if(Object.keys(elem).length>max)
        {
            maxElem = elem;
            max = Object.keys(elem).length;
        }      
    }
    return maxElem;
}
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum
}
function sumFinder(arr, sum){
    let differ = [], substract;
    for(let i = 0; i < arr.length; i++)
    {
        substract = sum - arr[i]; 
        if(differ[substract])
        {
            return [substract, arr[i]];   
        }    
        else
        {
            differ[arr[i]] = true;
        }
    }
    return [];
}
const  sumSearcher = (arr, n) => {
    if(!isSorted(arr))
    {
        arr = arr.sort( function(a,b){
            return a-b;
        });
    }
    if(arr.includes(n))
    {
        return [n];
    }
    if(sumArray(arr)<n)
    {
        return []
    }
    else if(sumArray(arr)==n)
    {
        return arr;
    }
    return sumFinder(arr, n);
} 

let chooseTask = prompt('Choose the task(1-3)');
if(chooseTask=="1")
{
    const obj = {
        name: true,
        age: 12,
        country: "Ukraine"
    }
    console.log(getStr(obj));
}
else if(chooseTask=="2")
{
    const arr = [{n: 1, m: 2},{a: 1, b: 2, c: 3}];
    console.log(getLong(arr));
}
else if(chooseTask=="3")
{
    const arr = [1,2,3,4,5,9];
    console.log(sumSearcher(arr, 9)); // searcher finds only sums of no more than 2 numbers
}