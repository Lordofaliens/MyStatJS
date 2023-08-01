class A {
  constructor(data) {
    this.data = data;
  }
}

class B {
  constructor(data) {
    this.data = data;
  }
}

class Factory {
  static cases = {
    A,
    B,
  };

  static check = {
    A: (data) => (data.a ? true : false),
    B: (data) => {
      for (let key in data) { if (typeof obj[key] !== 'string') return false; }
      return true;
    },
  };

  constructor({ data }) {
    return new Factory.cases[
      (Factory.check.A(data) && A.name) || (Factory.check.B(data) && B.name)
    ](data);
  }
}