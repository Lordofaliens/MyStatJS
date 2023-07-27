var input = document.getElementById("addtext");
var div = document.getElementById("outputDiv");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.code === "Enter") {
      div.innerHTML += "<span>" + input.value +"</span>"; // store to HTML
      input.value = ""; // clear the input field
    }
  });

function alertBtn() {
    alert("Hello, world!");
}