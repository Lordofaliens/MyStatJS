class Element {
    constructor() {
        this.a = "a";
        this.b = 0;
        this.c = false;
    }

    changeString(a) {
        if(typeof a === String) this.a = a;
        return this;
    }

    changeNumber(b) {
        if(typeof b === Number) this.b = b;
        return this;
    }

    changeBoolean(c) {
        if(typeof c === Boolean) this.c = c;
        return this;
    }
}

const elem = new Element().changeString("b").changeNumber(1).changeBoolean(true).changeString("c").changeNumber("a");
