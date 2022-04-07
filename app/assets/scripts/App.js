import '../styles/styles.css'

if (module.hot) {
    module.hot.accept()
};

/* Lesson exapmle code below this line */

function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name} and my favorite is color is ${this.favoriteColor}.`);
    }
}

let john = new Person("John Doe", "blue");
john.greet();

let jane = new Person("Jane Smith", "green");
jane.greet();