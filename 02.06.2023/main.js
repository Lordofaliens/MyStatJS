const canvas1 = document.getElementsByTagName("canvas")[0];
const ctx1 = canvas1.getContext("2d");
let l = 100;
for (let i = 0; i < 10; i++) {
    ctx1.fillRect(10 + i * 10, l, 10, 10);
    l-=10;
}

const canvas2 = document.getElementsByTagName("canvas")[1];
const ctx2 = canvas2.getContext("2d");
for (let i = 0; i < 10; i++) ctx2.fillRect(10 + i * 10, i % 2 ? 10 : 20, 10, 10);
