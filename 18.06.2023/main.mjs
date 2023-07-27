import { user, logUser } from "./utils.mjs";
import fs from "fs";
// import data from "./data.json" assert { type: "json" };

const data = JSON.parse(fs.readFileSync("./data.json"));

//DZ
function changeUser(newUserData, i) {
    if (i < 0 || i >= data.length) {
        console.err("Invalid index");
        return;
    }

    data[i] = { ...data[i], ...newUserData };

    fs.writeFileSync("./data.json", JSON.stringify(data));
}

console.log(data, "data");

function main(a, b) {
  return a + b;
}

console.log(main(10, 15));