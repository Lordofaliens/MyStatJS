var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() 
});

function getAver(arr){
    const sumWithInitial = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumWithInitial / arr.length;
}
function getWords(str){
    let ans = 0;
    for(let i = 0; i < str.length; i++)
    {
        if(str[i]!=" ")
        {
            for(let j = i+1; j < str.length; j++)
            {
                if(str[j]==" " && str[j-1]!=" ")
                {
                    ans++;
                }
            }
            if(str[str.length-1]!=" ")
            {
                ans++;
            }
            break;
        }
    }
    return ans;
}
function MinMax(arr){
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i]<min)
        {
            min = arr[i];
        }
        if(arr[i]>max)
        {
            max = arr[i];
        }
    }
    return {min, max};
}
function getWord(letters, word){
    letters = letters.flat();
    for(let i = 0; i < word.length; i++)
    {
        if(!letters.includes(word[i]))
        {
            return -1;
        }
    }
    return 1;
}

let chooseTask = prompt('Choose the task(1-4)');
if(chooseTask=="1")
{
    const arr = [1,6,8,21,56];
    console.log(getAver(arr));
}
else if(chooseTask=="2")
{
    const str = "Hello world random words here";
    console.log(getWords(str));
}
else if(chooseTask=="3")
{
    const arr2 = [20, 90, 7, 8, 100];
    console.log(MinMax(arr2));
}
else if(chooseTask=="4")
{
    const letters = [["b", "w"], ["a", "a"], ["n", "n"], ["q", "u"]];
    const word = "banana";
    console.log(getWord(letters, word));
}