import { Model } from "./model.mjs";

export class UserController extends Model {
  constructor(name, producer, age) {
    super(name, producer, age);
  }

  showInfo() {
    console.log("I am user", this);
  }
}