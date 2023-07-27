var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() 
});

function findSum(arr){
    arr = arr.filter(num => typeof num === 'number' );
    const sumWithInitial = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumWithInitial;
}
function getBigLetter(arr){
    const arr1 = arr.map(obj => obj.city);
    let bigLetters = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const arr2 = arr1.map(obj => obj[0]);
    for(let i = 0; i < arr2.length; i++)
    {
        if(!bigLetters.includes(arr2[i]))
        {
            return -1;
        }
    }
    return 1;
}
function fullRandom(arr){
    length = Math.floor(Math.random()*10);
    let maxElem = parseInt(prompt('Enter the maximum possible number:'));
    for(let i = 0; i < length; i++)
    {
        arr.push(Math.floor(Math.random() * maxElem));
    }
    return arr;
}
class Mesedess {
	constructor (name, price, color, dors) {
		this.name = name;
		this.price = price;
		this.color = color;
		this.dors = dors;
	}
// ("name", "dors") => price, color
}
function restProsp(arr){
    car = new Mesedess;
    let prosp = Object.keys(car).map(key => String(key));
    console.log(prosp);
    for(let i = 0; i < arr.length; i++)
    {
        prosp = prosp.filter(pr => pr !== arr[i]);
    }
    return prosp;
}

let chooseTask = prompt('Choose the task(1-4)');
if(chooseTask=="1")
{
    const arr = [1, 2, 4, "I am not a number", "Hello", 100, 45];
    console.log(findSum(arr));
}
else if(chooseTask=="2")
{
    const arr2 = [{city: "lviv"}, {city: "Kyiv"}, {city: "dnipro"}];
    console.log(getBigLetter(arr2));
}
else if(chooseTask=="3")
{
    const arr3 = [];
    console.log(fullRandom(arr3));
}
else if(chooseTask=="4")
{
    let arr = ["name", "dors"];
    console.log(restProsp(arr));
}