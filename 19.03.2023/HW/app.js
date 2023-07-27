let users = [
  { name: "Igor", city: "Kyiv", age: 20 },
  { name: "Alex", city: "Kyiv", age: 50 },
  { name: "Oleg", city: "Kyiv", age: 10 },
  { name: "Igor", city: "Kyiv", age: 20 },
  { name: "Alex", city: "Kyiv", age: 50 },
  { name: "Oleg", city: "Kyiv", age: 10 },
  { name: "Igor", city: "Kyiv", age: 20 },
  { name: "Alex", city: "Kyiv", age: 50 },
  { name: "Oleg", city: "Kyiv", age: 10 },
];

function DivideArr(users){
    let outputLength = users.length / 3;
    let ans = [];
    for(let i = 0; i < outputLength; i++)
    {
        let outputArr = []
        for(let j  = 0; j < 3; j++)
        {
            outputArr[j] = users[3*i+j];
        }   
        ans.push(outputArr);
    }
    return ans;
}
console.log(DivideArr(users));