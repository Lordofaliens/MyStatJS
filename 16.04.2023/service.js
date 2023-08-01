class Service {
  static headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  constructor(url) {
    this.url = url;
  }

  async getRequest() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

  async postRequest(data) {
    const response = await fetch(this.url, {
      headers: Service.headers,
      method: "POST",
      body: JSON.stringify(data),
    });

    const payload = await response.json();
    return payload;
  }


  //TYPE variabLE INTRODUCED TO AVAILE PATCH/PUT 
  async patchRequest(id, data, type = "PUT") {
    const response = await fetch(`${this.url}/${id}`, {
      headers: Service.headers,
      method: type,
      body: JSON.stringify(data),
    });

    const payload = await response.json();
    return payload;
  }

  async deleteRequest(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });

    const payload = await response.json();
    return payload;
  }
}

// class PostServise extends Service {
//   constructor(url) {
//     super(url);
//   }
// }

// const postService = new PostServise(
//   "https://jsonplaceholder.typicode.com/posts"
// );

// postService.getRequest().then((data) => console.log(data, "posts"));
// postService
//   .postRequest({ title: "title", body: "string", userId: 0 })
//   .then((data) => console.log(data, "creation of posts"));
// postService
//   .patchRequest(1, { id: 1, title: "title", body: "body" })
//   .then((data) => console.log(data, "updates of posts"));
// postService
//   .deleteRequest(1)
//   .then((status) => console.log("status of deletion", status));

// class UserService extends Service {
//   constructor(url) {
//     super(url);
//   }
// }

const userService = new Service("https://jsonplaceholder.typicode.com/users");

userService.getRequest().then((data) => console.log(data, "users"));
userService
  .postRequest({ title: "title", body: "string", userId: 0 })
  .then((data) => console.log(data, "creation of users"));
userService
  .patchRequest(1, { id: 1, title: "title", body: "body" }, "PUT")
  .then((data) => console.log(data, "updates of users"));
userService
  .deleteRequest(1)
  .then((status) => console.log("status of deletion (user)", status));

// ----------------------------------------------------
class UserRealService extends Service {
  constructor(url) {
    super(url);
  }
}

const realUserService = new UserRealService(
  "https://learning-server.onrender.com/users"
);

class TodosService extends Service {
  constructor(url) {
    super(url);
  }
}

const todosService = new TodosService(
  "https://jsonplaceholder.typicode.com/todos"
);

todosService.getRequest().then((data) => console.log(data, "TODOS DATA"));

// realUserService
//   .postRequest({
//     name: "Igor10",
//     age: 23,
//     location: "Kyiv",
//     salary: 3000,
//     skills: ["HTML", "CSS"],
//   })
//   .then((data) => {
//     console.log("new user", data);
//   });

// realUserService.getRequest().then((data) => console.log("users2", data));

// realUserService
//   .patchRequest("6435961868dc217913867831", {
//     age: 10,
//     skills: ["HTML", "CSS", "JavaScript"],
//   })
//   .then((data) => console.log("updated user", data))
//   .catch((e) => console.log(e));

// realUserService
//   .deleteRequest("6435965968dc217913867856")
//   .then((data) => console.log("deletion data", data))
//   .catch((e) => console.log("!!!!", e));

// 1.  Написати логіку що прибере повторюваних користувачів за name з загального масиву користувачів

realUserService.getRequest().then((data) => {
  console.log("users before", data.users);

  const result = [];

  data.users.forEach((user, index, array) => {
    // const usersWithSameName = array.filter((u) => u.name === user.name);
    const isUserAdded = result.find(
      (u) => u.name === user.name && u.age === user.age
    );
    !isUserAdded && result.push(user);
  });

  console.log(result, "result");
});

class ProjectService extends Service {
  constructor(url) {
    super(url);
  }
}

const projectService = new ProjectService(
  "https://learning-server.onrender.com/projects"
);

projectService.getRequest().then((data) => console.log("data!!!!", data));
projectService
  .postRequest({
    name: "Project!",
    duration: 100,
    users: ["6435961b68dc217913867835"],
  })
  .then((data) => console.log("data!!!![post]", data));