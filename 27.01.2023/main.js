const screenInput = document.querySelector('.screen-input');
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const equal = document.querySelector('.equal');
const AC = document.querySelector('.AC');
const CE = document.querySelector('.CE');
const CH = document.querySelector('.CH');
const buttons = document.querySelectorAll("button");
const historyInner = document.querySelector(".history-inner");

let numbers = [];
let isOper = false;

zero.onclick = function() {
    if(screenInput.value == "")
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    }
    if(isOper)
    {
        screenInput.value = "0";
        isOper = false;
    }
    else
    {
        screenInput.value += "0";
    }
}
one.onclick = function() {
    if(screenInput.value == "")
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    }
    if(isOper)
    {
        screenInput.value = "1";
        isOper = false;
    }
    else
    {
        screenInput.value += "1";
    }
}
two.onclick = function() {
    if(screenInput.value == "")
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    }
    if(isOper)
    {
        screenInput.value = "2";
        isOper = false;
    }
    else
    {
        screenInput.value += "2";
    }
}
three.onclick = function() {
    if(screenInput.value == "")
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    }
    if(isOper)
    {
        screenInput.value = "3";
        isOper = false;
    }
    else
    {
        screenInput.value += "3";
    }
}
four.onclick = function() {
    if(screenInput.value == "")
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    }
    if(isOper)
    {
        screenInput.value = "4";
        isOper = false;
    }
    else
    {
        screenInput.value += "4";
    }
}
five.onclick = function() {
    if(screenInput.value == "")
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    }
    if(isOper)
    {
        screenInput.value = "5";
        isOper = false;
    }
    else
    {
        screenInput.value += "5";
    }
}
six.onclick = function() {
    if(screenInput.value == "")
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    }
    if(isOper)
    {
        screenInput.value = "6";
        isOper = false;
    }
    else
    {
        screenInput.value += "6";
    }
}
seven.onclick = function() {
    if(screenInput.value == "")
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    }
    if(isOper)
    {
        screenInput.value = "7";
        isOper = false;
    }
    else
    {
        screenInput.value += "7";
    }
}
eight.onclick = function() {
    if(screenInput.value == "")
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    }
    if(isOper)
    {
        screenInput.value = "8";
        isOper = false;
    }
    else
    {
        screenInput.value += "8";
    }
}
nine.onclick = function() {
    if(screenInput.value == "")
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    }
    if(isOper)
    {
        screenInput.value = "9";
        isOper = false;
    }
    else
    {
        screenInput.value += "9";
    }
}
AC.onclick = function() {
    screenInput.value = "";
    numbers = []; 
}
CE.onclick = function() {
    console.log(screenInput.value);
    screenInput.value = Math.floor(screenInput.value/10);
    if(screenInput.value=="0")
    {
        screenInput.value = "";
    }
}
CH.onclick = function() {
    historyInner.innerHTML = `<p class="history-text">History is cleared</p>`;
}
plus.onclick = function() {
    numbers[0] = screenInput.value;
    numbers[1] = "+";
    isOper = true;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    plus.classList.add("active");
}
minus.onclick = function() {
    numbers[0] = screenInput.value;
    numbers[1] = "-";
    isOper = true;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    minus.classList.add("active");
}
divide.onclick = function() {
    numbers[0] = screenInput.value;
    numbers[1] = "/";
    isOper = true;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    divide.classList.add("active");
}
multiply.onclick = function() {
    numbers[0] = screenInput.value;
    numbers[1] = "*";
    isOper = true;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    multiply.classList.add("active");
}
equal.onclick = function() {
    numbers[2] = screenInput.value;
    screenInput.value = eval(numbers[0]+numbers[1]+numbers[2]);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    historyInner.innerHTML = `<p class="history-text">${numbers[0]} ${numbers[1]} ${numbers[2]} = ${screenInput.value}</p>` + historyInner.innerHTML;
}