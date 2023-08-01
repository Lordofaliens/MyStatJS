import { Controller } from "./controller.mjs";

class View extends Controller {
  constructor(name, producer, age) {
    super(name, producer, age);
  }

  render(index) {
    const main = document.querySelector("#main");

    main.innerHTML += `
    <div>
        <p>${this.name}, ${this.producer}</p>
        <p>${this.age}</p>
        <button id="show-btn-${index}">Show info</button>
    </div>
    `;
    const showBtn = document.querySelector(`#show-btn-${index}`);
    showBtn.onclick = this.showInfo;
  }
}

export default View;