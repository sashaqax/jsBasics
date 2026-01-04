
//mail

const users = [
    { name: "Mike", email: "mike@gmail.com", age: 29 },
    { name: "Viktoriia", email: "viktoriia@gmail.com", age: 23 },
    { name: "Sasha", email: "sasha@gmail.com", age: 28 }
];

//for 

for (const { name, email, age } of users) {
    console.log(name, email, age);
}
