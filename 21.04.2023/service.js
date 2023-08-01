class Service {
  static headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  constructor() {
    this.url = "https://learning-server.onrender.com/projects";
  }

  constructor(url) {
    this.url = url;
  }

  async getRequest() {
    const data = await fetch(this.url,{
      headers: Service.headers,
      method: "GET"
    });
    return data.json();
  }

  async postRequest(data) {
    const output = await fetch(this.url,{
      headers: Service.headers,
      method: "POST",
      body: JSON.stringify(data)
    });
    return output.json();
  }
}