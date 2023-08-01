class Adapter {
  static cases = {
    increment: (data) => {
        if(typeof data === Number) data++;
        return data;
    },
    decrement: (data) => {
        if(typeof data === Number) data--;
        return data;
    },
    reset: (data) => {
       if(typeof data === Number) data = 0;
        return data; 
    }
  };

  constructor(data, adapterCase) {
    return Adapter.cases[adapterCase] ? Adapter.cases[adapterCase](data) : {};
  }
}

var adapt = new Adapter(5, "increment");
adapt = new Adapter(adapt, "decrement");
adapt = new Adapter(adapt, "reset");