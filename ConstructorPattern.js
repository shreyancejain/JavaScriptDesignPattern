/**
 * Created by Amit Thakkar on 15/6/14.
 */
function User(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function () {
        return "Name: " + amit.name + "And Age: " + this.age;
    };
}

var amit = new User("Amit Thakkar", 25),
    pi = new User("Shreyance", 30);

console.log(amit.toString());
console.log(pi.toString());