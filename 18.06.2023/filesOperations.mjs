import fs from "fs";
import fetch from "node-fetch";

// if (!fs.existsSync("folder")) {
//   fs.mkdirSync("folder");
// }

// fs.writeFileSync("folder/text.txt", "Hello from Node.js");
// fs.writeFileSync("text2.txt", "hello 2");

// fs.writeFile("text3.txt", "hello 3", () => {
//   console.log("File was created");
// });

const data = ["Hello", "Hello2", "From", "World", "abc"];
// Складіть всі ці файли у папку data
// на базі даних масиву data створіть файли для кожного елемента.
// Назва файлу має містити індекс елемента
// Контент файлу має містити контент елменту 0.txt ("Hello")

async function getData() {
  const responseData = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await responseData.json();

  console.log(data, "Data");

  fs.writeFileSync("data.json", JSON.stringify(data));
}

getData();