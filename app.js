// my name variable
let Fullname = "Aaron Varden";
// states number constant
const States = 50;
// the sum of 5+4
let sum = 5 + 4;

console.log(Fullname)
console.log(States)
console.log(sum)

// fuction for Hello World!
function sayHello() {
    alert("Hello World!");
};

//call funtion for sayHello
sayHello()

//function for check age
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    } else {

    }
}

//friends for function
let Charles = {
    name: "Charles",
    age: 21
};

let Abby = {
    name: "Abby",
    age: 27
};

let James = {
    name: "James",
    age: 18
};

let John = {
    name: "John",
    age: 17
};
// call for check age funtion
checkAge(Charles.name, Charles.age);
checkAge(Abby.name, Abby.age);
checkAge(James.name, James.age);
checkAge(John.name, John.age);
//array for vegies
let vegetables = ['broccoli', 'cauliflower', 'tomato'];
// loop for vegies
for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}
// varible for pet
let pet = {
    name: "Vanna",
    breed: "Pitbull"
};
console.log(pet)
// variable for people
let people = [
    {
        name: "Alex",
        age: 50
    },
    {
        name: "Kody",
        age: 19
    },
    {
        name: "Jacob",
        age: 14
    },
    {
        name: "Laura",
        age: 35
    },
    {
        name: "blake",
        age: 90
    }
]
// loop for people with check age fuction added
for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getlength(word) {
    return word.length;
}

let variable = getlength("Hello World");
if (variable % 2 == 0) {
    console.log("The world is nice and even!");
}else {
    console.log("The world is an odd place!")
}