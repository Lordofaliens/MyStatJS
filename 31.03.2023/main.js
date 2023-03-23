const body = document.querySelector("body");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");
const userEmailOutput = document.getElementById("user-email"); 
const userPasswordOutput = document.getElementById("user-password"); 
const LO = document.querySelector(".LO"); 


let user = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user"))
: undefined;

if (user) {
    const {email, password} = user;
    userEmailOutput.textContent = email;
    userPasswordOutput.textContent = password;
}

submitBtn.onclick = () => {
    const email =  emailField.value;
    const password = passwordField.value;

    user = {email, password};

    userEmailOutput.textContent = "Login: "+email;
    userPasswordOutput.textContent = "Password: "+password;
    LO.innerHTML += `<button id="logout" onclick="deleteUser()">LogOut</button>`;
    
    emailField.value = "";
    passwordField.value = "";
    localStorage.setItem("user", JSON.stringify(user));
}
function deleteUser(){
    localStorage.removeItem("user");
    userEmailOutput.textContent = ""; 
    userPasswordOutput.textContent = ""; 
    const deleteBtn = document.getElementById("logout");
    deleteBtn.parentNode.removeChild(deleteBtn); 
}