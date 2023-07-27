// import fs from "fs";
// import fetch from "node-fetch";

// async function getData() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const parsedData = await data.json();

//   return parsedData;
// }

// function createDataFile(data) {
//   fs.writeFileSync("posts.json", JSON.stringify(data));
// }

// getData().then((data) => createDataFile(data));