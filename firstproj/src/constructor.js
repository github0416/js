class Person {
    constructor (fname) {
        this._fname = fname;
    }

    display() {
        console.log(this._fname);
    }
}

var helen = new Person("Helen");
helen.display();

var katie = new Person();
katie.display();

console.log("\u{1F4A9}");
