var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() 
});

function getStr(obj, ans){
    ans = "City "+obj.city+" has "+obj.visitors+ " visitors nowadays.";
    return ans;
}
function getSum(data){
    return data.n1+data.n2+data.n3;
}
function GetAlph(alph, arr){
    let keyTable = [];
    for(let i = 0; i < arr.length; i++)
    {
        keyTable[i]=alph.indexOf(arr[i]);
    }
    keyTable.sort(function(a, b) {
        return a - b;
      });
    for(let i = 0; i < keyTable.length; i++)
    {
        keyTable[i] = alph[keyTable[i]];
    }
    return keyTable;
}

let chooseTask = prompt('Choose the task(1-3)');
if(chooseTask=="1")
{
    const obj = {
        city: "Lviv",
        visitors: 150000
    };
    const output = "";
    console.log(getStr(obj, output));
}
else if(chooseTask=="2")
{
    const data = {
        n1: 10,
        n2: 90,
        n3: 100
    }
    console.log(getSum(data));
}
else if(chooseTask=="3")
{
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    const arr = ["a", "b", "d", "f", "x", "z", "u"];
    console.log(GetAlph(alph, arr));
}