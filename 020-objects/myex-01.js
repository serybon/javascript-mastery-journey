const user = {
    name: "Boris",
    age: 36,
    gender: "male",
    job: "pharmacist",
    Greeting: function () { console.log(`Greetings to you from ${this.name}`); },
}
const person = {
    firstName: 'bob',
    lastName: 'johnson',
    age: 39,
    job: 'manager',
    address: {
        "country": "Belarus",
        "city": "Minsk",
        "street": "Goretskogo",
        "building": 6
    }
}

user.name = "Don Huan"
user.newFuction = (num1, num2) => console.log(`Hello, I am ${user.name}! I have ability to count numbers ${num1 + num2}`);


for (const key in person) {

    //const item = user[key];
    if (typeof item === "function") {
        const func = item.bind(person);
        func();
    } else console.log(person[key])
}
//console.log(person);


// for (const key in person) {
//     console.log(`${key}: ${person[key]}`);
// }


