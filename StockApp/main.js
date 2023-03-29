'use strict';

//const { get } = require("request");

const inputStock = document.querySelector(".InputStock");
let pinnedStock = document.querySelector("#pinned-stock");
let innerStock = document.querySelector("#trade-container");
let pin;

const APIKEY = "U456V6407S52XAER";
const prefStock = inputStock.value;
//let stocks = [];
//let pinnedStocks = [];

class Stock{
    constructor(name, price, change, changePercent){
        this.name = name;
        this.price = price;
        this.change = change;
        this.changePercent = changePercent;
    }
}



function displayPinnedStock(index){
    let pinnedStocks = JSON.parse(localStorage.getItem("pinnedStocks")) || [];
    if(pinnedStocks[index]!=null)
    {
        let arrowImg;
        if(pinnedStocks[index].change<0)
        {
            arrowImg = `<img class="down" src="./img/arrow.png">`;
        }
        else
        {
            arrowImg = `<img class="up" src="./img/arrow.png">`;
        }
        let toLocaleStorage = `
        <div class="pinnedStockItem">
            <div class="left">
                <span id="stock-name"><b> ${pinnedStocks[index].name} &nbsp</b></span>
                <span id="stock-price">Price: $${pinnedStocks[index].price} &nbsp</span>
                <span id="stock-change">Change: $${pinnedStocks[index].change}</span> 
                <span id="stock-change-percent"> (${pinnedStocks[index].changePercent})</span>
            </div>
            <div class="right">
                <div class="arrowDiv">${arrowImg}</div>
                <button class="pin rotated" onclick="unPinStock(${index})">
                    <img class="pinImg" src="./img/pin.png">
                </button>
                <button class="cross" onclick="deleteStock(${index})">
                    <img class="crossImg" src="./img/cross.png">
                </button>
            </div>
        </div>
        `;
        localStorage.setItem(`pinnedStock${index}`, toLocaleStorage);
        localStorage.setItem(`innerStock${index}`, "");
    }
}

function displayStock(index){
    console.log("New ITEM!");
    let stocks =  JSON.parse(localStorage.getItem("stocks")) || [];
    let arrowImg;
    if(stocks[index]!=null)
    {
        if(stocks[index].change<0)
        {
            arrowImg = `<img class="down" src="./img/arrow.png">`;
        }
        else
        {
            arrowImg = `<img class="up" src="./img/arrow.png">`;
        }
        let toLocaleStorage = `
        <div class="stockItem"> 
            <div class="left>
                <p>
                    <span id="stock-name"><b> ${stocks[index].name} &nbsp</b></span>
                </p>
                <p>Price: 
                    <span id="stock-price">$${stocks[index].price} &nbsp</span>
                </p>
                <p>Change:
                    <span id="stock-change">$${stocks[index].change}</span>
                    <span id="stock-change-percent">(${stocks[index].changePercent})</span>
                </p>
            </div>
            <div class="right">
                <div class="arrowDiv">${arrowImg}</div>
                <button class="pin" onclick="pinStock(${index})">
                    <img class="pinImg" src="./img/pin.png">
                </button>
                <button class="cross" onclick="deleteStock(${index})">
                    <img class="crossImg" src="./img/cross.png">
                </button>
            </div>
        </div>
        `;
        localStorage.setItem(`innerStock${index}`, toLocaleStorage);
        localStorage.setItem(`pinnedStock${index}`, "");
    }   
}

function displayStocks(){
    innerStock.innerHTML = "";
    let stocks =  JSON.parse(localStorage.getItem("stocks")) || [];
    for(let i = 0; i < stocks.length; i++)
    {
        displayStock(i);
        if(localStorage.getItem(`innerStock${i}`)!=null)
        {
            innerStock.innerHTML += localStorage.getItem(`innerStock${i}`);
        } 
    }
}

function displayPinnedStocks(){
    pinnedStock.innerHTML = "";
    let pinnedStocks =  JSON.parse(localStorage.getItem("pinnedStocks")) || [];
    for(let i = 0; i < pinnedStocks.length; i++)
    {
        displayPinnedStock(i);
        if(localStorage.getItem(`pinnedStock${i}`)!=null)
        {
            pinnedStock.innerHTML += localStorage.getItem(`pinnedStock${i}`);
        } 
    }
}

function refreshStocks(){
    innerStock.innerHTML = "";
    pinnedStock.innerHTML = "";
    for(let i = 0; i < parseInt(localStorage.getItem("numberofitems")); i++)
    {
        if(localStorage.getItem(`pinnedStock${i}`)!=null)
        {
            pinnedStock.innerHTML += localStorage.getItem(`pinnedStock${i}`);
        }   
    }
    for(let i = 0; i < parseInt(localStorage.getItem("numberofitems")); i++)
    {
        if(localStorage.getItem(`innerStock${i}`)!=null)
        {
            innerStock.innerHTML += localStorage.getItem(`innerStock${i}`);
        }   
    }
}

function deleteStock(index) {
    //stocks = stocks.filter((element) => stocks[index] != element);
    let pinnedStocks =  JSON.parse(localStorage.getItem("pinnedStocks")) || [];
    let stocks =  JSON.parse(localStorage.getItem("stocks")) || [];
    delete pinnedStocks[index];
    delete stocks[index];
    let strStocks = JSON.stringify(stocks);
    let strPinnedStocks = JSON.stringify(pinnedStocks);
    localStorage.setItem("stocks", strStocks);
    localStorage.setItem("pinnedStocks", strPinnedStocks);
    localStorage.removeItem(`innerStock${index}`);
    localStorage.removeItem(`pinnedStock${index}`);
    refreshStocks();
}

function pinStock(index) {
    let pinnedStocks =  JSON.parse(localStorage.getItem("pinnedStocks")) || [];
    let stocks =  JSON.parse(localStorage.getItem("stocks")) || [];
    pinnedStocks[index] = stocks[index];
    //pinnedStocks.splice(index, 0, new Stock(stocks[index].name,stocks[index].price,stocks[index].change,stocks[index].changePercent));
    delete stocks[index];
    let strStocks = JSON.stringify(stocks);
    let strPinnedStocks = JSON.stringify(pinnedStocks);
    localStorage.setItem("stocks", strStocks);
    localStorage.setItem("pinnedStocks", strPinnedStocks);
    //localStorage.removeItem(`innerStock${index}`);
    //localStorage.removeItem(`pinnedStock${index}`);
    displayPinnedStock(index);
    refreshStocks();
    //displayPinnedStocks();
    //displayStocks();
    console.log(pinnedStocks);
    console.log(stocks);  
}

function unPinStock(index) { 
    let pinnedStocks =  JSON.parse(localStorage.getItem("pinnedStocks")) || [];
    let stocks =  JSON.parse(localStorage.getItem("stocks")) || [];
    stocks[index] = pinnedStocks[index];
    //stocks.splice(index, 0 , new Stock(pinnedStocks[index].name,pinnedStocks[index].price,pinnedStocks[index].change,pinnedStocks[index].changePercent));
    delete pinnedStocks[index];
    let strStocks = JSON.stringify(stocks);
    let strPinnedStocks = JSON.stringify(pinnedStocks);
    localStorage.setItem("stocks", strStocks);
    localStorage.setItem("pinnedStocks", strPinnedStocks);
    displayStock(index);
    refreshStocks();
    //displayPinnedStocks();
    //displayStocks();
    console.log(pinnedStocks);
    console.log(stocks);
}

function addStock(data){
    const name = data['Global Quote']['01. symbol'];
    const price = data['Global Quote']['05. price'];
    const change = data['Global Quote']['09. change'];
    const changePercent = data['Global Quote']['10. change percent'];
    let stocks = JSON.parse(localStorage.getItem("stocks")) || [];
    let pinnedStocks = JSON.parse(localStorage.getItem("pinnedStocks")) || [];
    stocks.push(new Stock(name,price,change,changePercent));
    pinnedStocks.push(new Stock());
    let strStocks = JSON.stringify(stocks);
    let strPinnedStocks = JSON.stringify(pinnedStocks);
    localStorage.setItem("stocks", strStocks);
    localStorage.setItem("pinnedStocks", strPinnedStocks);
    var numberofitems = parseInt(localStorage.getItem("numberofitems")) || 0;
    numberofitems++;
    localStorage.setItem("numberofitems", numberofitems);
    displayStocks();
}

function fetchStockData(prefStock)
{
    const APIKEY = "U456V6407S52XAER";
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${prefStock}&apikey=${APIKEY}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        addStock(data);
    })
    .catch(error => {
        console.error(error);
    });
}

inputStock.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        fetchStockData(inputStock.value);
        inputStock.value = "";
    }
    refreshStocks();
});
for(let i = 0; i < parseInt(localStorage.getItem("numberofitems")); i++)
{
    if(localStorage.getItem(`pinnedStock${i}`)!=null)
    {
        pinnedStock.innerHTML += localStorage.getItem(`pinnedStock${i}`);
    }   
}
for(let i = 0; i < parseInt(localStorage.getItem("numberofitems")); i++)
{
    if(localStorage.getItem(`innerStock${i}`)!=null)
    {
        innerStock.innerHTML += localStorage.getItem(`innerStock${i}`);
    }   
}



//pin & delete functios don't work properly