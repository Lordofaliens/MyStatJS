var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() 
});

function getLen(arr){
    arr = arr.map(num => num.toString());
    arr = arr.map(num => num.length);
    return arr;
}
function reverseStr(str){
    str = str.split(' ');
    str = str.reverse();
    str = str.join(' ');
    return str;
}
function leaveLet(str){
    const symb = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
    for(let i = 0; i < str.length; i++)
    {
        if(!symb.includes(str[i]))
        {
            str = str.replace(str[i],'');
            i--;
        }
    }
    str = str.replace(/\s+/g,' ');
    return str;
}

let chooseTask = prompt('Choose the task(1-3)');
if(chooseTask=="1")
{
    let num = [100000,100000000];

    console.log(getLen(num));
}
else if(chooseTask=="2")
{
    let str = "Hello World";
    console.log(reverseStr(str));
}
else if(chooseTask=="3")
{
    let str = "Test string, .., -- string test";
    console.log(leaveLet(str)); 
}