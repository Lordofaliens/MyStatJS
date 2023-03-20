
/*<!---VARIABLES-FROM-DOCUMENT---!>*/

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const cityInput = document.querySelector("#city");
const createButton = document.querySelector("#create");
const usersSection = document.querySelector("#users-section");
const searchInput = document.querySelector("#search");
const sortingByNameCheckbox = document.querySelector("#sort-by-name");
const sortingByAgeCheckbox = document.querySelector("#sort-by-age");
const sortingByCityCheckbox = document.querySelector("#sort-by-city");
const paginationSection = document.querySelector("#pagination");
const slideContent = document.querySelector(".last-button");
const openBtn = document.querySelector(".openBtn");
const sidebar = document.querySelector(".sidebar");
const listOfOper = document.querySelector(".last-operations-inner");

/*<!---CLASSES---!>*/

// class is created separately just cus I like it 

class User{ 
    constructor(id, name, city, age)
    {
        this.id = id;
        this.name = name;
        this.city = city;
        this.age = age;
    }
}

/*<!---INIZIALISED-VARIABLES---!>*/

let idDataBase = [];
let pages = [];
let changingUser = undefined;
let paginationpageNumber = 0;
let users = [                                                   // array of users is created
    new User(generateId(), "Рома", "Київ", 20),
    new User(generateId(), "Влад", "Львів", 17),
    new User(generateId(), "Олег", "Лондон", 32),
    new User(generateId(), "Саша", "Амстердам", 22),
    new User(generateId(), "Маша", "Барселона", 12),
    new User(generateId(), "Даша", "Париж", 16),
    new User(generateId(), "Паша", "Варшава", 15),
    new User(generateId(), "Вова", "Одеса", 22),
    new User(generateId(), "Вася", "Харків", 25),
    new User(generateId(), "Ваня", "Мадрид", 29),
    new User(generateId(), "Рита", "Роттердам", 38)
];
const sorting = {
    names: () => {
       const usersCopy = [...users]; 
       usersCopy.sort((user1, user2) => user1.name.localeCompare(user2.name));
       renderUsers(usersCopy);
    },
    ages: () => {
      const usersCopy = [...users]; 
      usersCopy.sort((user1, user2) => +user1.age - +user2.age);
      renderUsers(usersCopy);
    },
    cities: () => {                                             // new prosperity added to sort by cities
      const usersCopy = [...users]; 
      usersCopy.sort((user1, user2) => user1.city.localeCompare(user2.city));
      renderUsers(usersCopy);
    }
};

/*<!---ID-GENERATION-METHOD---!>*/

function generateId (length = Math.floor(Math.random()*100)) { // increase of randomness
  let id = "";
  const symbols = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+-={}[]|;:'"; // increase of randomness

  while(true)
  {
    for (let i = 0; i < length; i++) {
        id += symbols[Math.floor(Math.random() * symbols.length )];
      }
      if(!idDataBase.includes(id))                            // guarantee uniqueness
      {
        break;
      }
      else
      {
        id = "";
      }
  }
  idDataBase.push(id);
  return id;
}

renderUsers();

/*<!---BUTTON-METHODS---!>*/

const editUser = (userId) => {
  const userToEdit = users.find((user) => user.id === userId);
  listOfOper.innerHTML = `<p>Information about ${userToEdit.name} is edited.</p>`+listOfOper.innerHTML;
  const indexOfEditingUser = users.findIndex((user) => user.id === userId)

  changingUser = {data: userToEdit, index: indexOfEditingUser};

  createButton.textContent = "Save changes";

  nameInput.value = changingUser.data.name;
  ageInput.value = changingUser.data.age;
  cityInput.value = changingUser.data.city;
};
const copyUser = (userId) => {                                  // added method to copy info faster
    const userToCopy = users.find((user) => user.id === userId);
    listOfOper.innerHTML = `<p>Information about ${userToCopy.name} is copied.</p>`+listOfOper.innerHTML;
    const copiedData = "User's id: " + userToCopy.id + ". User's name: " + userToCopy.name + ". User's age: " + userToCopy.age + ". User's city: " + userToCopy.city + ".";
    navigator.clipboard.writeText(copiedData);
};
const translateUser = (userId) => {                             // added method to translate info from ukrainian to english 
    let userToTrans = users.find((user) => user.id === userId);
    listOfOper.innerHTML = `<p>Information about ${userToTrans.name} is translated.</p>`+listOfOper.innerHTML;
    var textToTranslate = userToTrans.name + " " + userToTrans.city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2b386cf600msh1dfb6e048cf656dp180a91jsn7a58fcbbed6f',
            'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
        }
    };
    fetch('https://nlp-translation.p.rapidapi.com/v1/translate?text='+encodeURIComponent(textToTranslate)+'&to=en&from=uk', options)
	.then(response => response.json())
    .then(response => {
        response = response.translated_text.en
        var words = response.split(' ');
        userToTrans.name = words[0];
        userToTrans.city = words[1];
        renderUsers();
    })
	.catch(err => console.error(err));
};
const deleteUser = (userId) => {
    let userToDel = users.find((user) => user.id === userId);
    users = users.filter( (user) => user.id !== userId);
    listOfOper.innerHTML = `<p>Information about ${userToDel.name} is deleted.</p>`+listOfOper.innerHTML;
    renderUsers();
};

/*<!---RENDERING-DATA---!>*/

function groupElementsOfArray(arr, oneSetQuantity) {
    const result = [];
    for (let i = 0; i * oneSetQuantity < arr.length; i++) {                           // efficiency is improved
      result.push(arr.slice(i * oneSetQuantity, (i + 1) * oneSetQuantity));
    }
    return result.filter((arr) => arr.length > 0 );
}
function renderPagination (usersQuantity) {
    paginationSection.innerHTML = "";
    for ( let i = 0; i < usersQuantity / 4; i++ ) {
      const button = document.createElement("button");
      button.classList.add("pageNum");
      button.textContent = i+1;                       // page numeration fixed
      if(paginationpageNumber == i)                   // visible effect
      {
        button.classList.add("onMyPage");
      }                                                     
      button.onclick = () => {
        paginationpageNumber = i;                     // efficiency boost, code which is never read is deleted
        renderUsers();
      }
      paginationSection.appendChild(button);
    }
};  
function renderUsers(usersToRender = groupElementsOfArray(users, 4)[paginationpageNumber]) {
  renderPagination(users.length);

  // user cards render
  usersSection.innerHTML = "";
  const usersContent = usersToRender.map(
    (user) => `
    <div class="flip-card">
      <div class="flip-card-inner">
      <div class="flip-card-front">
          <p><span class="left">Name:</span><span class="right">${user.name}</span></p>
          <br>
          <p><span class="left">City:</span><span class="right">${user.city}</span></p>
          <br>
          <p><span class="left">Age:</span><span class="right">${user.age}</span></p>
        </div>
        <div class="flip-card-back">
          <button class="backBtn edit-user-button" id="${user.id}">Edit</button>
          <button class="backBtn copy-user-button" id="${user.id}">Copy</button>
          <button class="backBtn translate-user-button" id="${user.id}">Translate</button>                
          <button class="backBtn delete-user-button" id="${user.id}">Delete</button>
        </div>
      </div>
    </div>`
  );
  usersContent.forEach((userLayout) => {
    usersSection.innerHTML += userLayout;
  });

  // button functions render
  const editButtons = [...document.querySelectorAll(".edit-user-button")];
  editButtons.forEach((button) => {
    button.onclick = () => editUser(button.id);
  });
  const copyButtons = [...document.querySelectorAll(".copy-user-button")];                // added button
  copyButtons.forEach((button) => {
    button.onclick = () => copyUser(button.id);
  });
  const translateButtons = [...document.querySelectorAll(".translate-user-button")];      // added button
  translateButtons.forEach((button) => {
    button.onclick = () => translateUser(button.id);
  });
  const deleteButtons = [...document.querySelectorAll(".delete-user-button")];          
  deleteButtons.forEach((button) => {
    button.onclick = () => deleteUser(button.id);
  });
}

/*<!---ADD-USER-METHOD---!>*/

createButton.onclick = () => {
  const name = nameInput.value;
  const age = +ageInput.value;
  const city = cityInput.value;
  if (!name || !age || !city) {
   return alert("Please enter all required data");
  }
  if (changingUser) {
   
    users[changingUser.index] = {
        ...users[changingUser.index],
        name: name,
        age: age,
        city: city,
    };
    changingUser = undefined;
    createButton.textContent = "Create User";
  } else {
    const user = new User(generateId(), name, age, city);
    users.unshift(user);
  }
  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";
  renderUsers();
};

/*<!---SEARCHING-METHOD---!>*/

searchInput.oninput = (event) => {
  if (!event.target.value) return renderUsers();
  const usersToRender = users.filter(({ name, age, city }) =>
    [name, age.toString(), city].some((element) =>
      element.includes(event.target.value)
    )
  );
  renderUsers(usersToRender);
};

/*<!---SORTING-METHODS---!>*/

sortingByNameCheckbox.onchange = (event) => {
    if (event.target.checked) {
        sorting.names();
        sortingByAgeCheckbox.checked = false;
        sortingByCityCheckbox.checked = false;
    } else {
        renderUsers();
    }
}
sortingByAgeCheckbox.onchange = (event) => {
  if (event.target.checked) {
      sorting.ages();
      sortingByNameCheckbox.checked = false;
      sortingByCityCheckbox.checked = false;
  } else {
      renderUsers();
  }
}
sortingByCityCheckbox.onchange = (event) => {             // added sorting method for cities
    if (event.target.checked) {
        sorting.cities();
        sortingByNameCheckbox.checked = false;
        sortingByAgeCheckbox.checked = false;
    } else {
        renderUsers();
    }
}

openBtn.addEventListener('click', function(){             // added sidebar animation
  if(sidebar.classList.contains("show-sidebar"))
  {
    listOfOper.classList.remove("operations-shown");
    slideContent.classList.remove("show");
  }
  else{
    listOfOper.classList.toggle("operations-shown");
    slideContent.classList.toggle("show");
  }
});