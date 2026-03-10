//const oldObject = new Object();
//oldObject.age = 10;

const { useCallback } = require("react");

//console.log(oldObject);

//const person = {
//name: 'Sasha',
//age: 28,
//sayHello: function () {
//console.log('Hello my name is ${name}');
// }
//}

//console.log(person);
//console.log(person.name);

//const personName = person.name;

//console.log(personName.toUpperCase());

//person.age = 31;
//person.city = 'Izmail';
//delete person.age;

//console.log(person);
//person.sayHello();


//const fullName = 'Firstname lastName';
//const email = 'test@gmail.com';
//const phone = '111-222-3333';


//const user = {
//    fullName,
//    email,
//    phone,
//}
//console.log(user);

//const person = {
//name: 'Sasha',
//age: 28,
//address: {
//country: 'Ukraine',
//city: 'Izmail',
//street: 'Shevchenko',
//phones: {
//work: '111-222-3333',
//home: '444-555-6666',
//mobile: '777-888-9999',


//}

//}
//}

//console.log(person);
//console.log(person.address.phones.mobile);



//let propertyName = 'address';

//const person = {
//    name: 'Sasha',
//    age: 28,
//    [propertyName]: 'Odessa',

//}
//console.log(person[propertyName]);

//const person = {
//    name: 'Sasha',
//    age: 28,
//    address: null,

//}
//console.log(person.address?.street);


//const person = {
//    name: 'Sasha',
//    age: 28,
//    city: 'Bolgrad',

//}

//for (let key in person) {
//    console.log('key: ${key}, value: ${person[key]}');


//}
//console.log(person.hasOwnProperty('lastName'));



//let animalPrototype = {
//    type: 'animal',
//    greet() {
//        return `Hello, my name is ${this.name}`;
//    }
//}
//let cat = Object.create(animalPrototype);
//cat.name = 'Cat Meow';
//
//let dog = Object.create(animalPrototype);
//dog.name = 'Dog Bark';
//
//console.log(cat.greet());
//console.log(dog.greet());






//const person = {
//    name: 'Sasha',
//    age: 28,
//    address: null,
//}

//console.log(Object.keys(person));
//console.log(Object.values(person));
//Object.keys(person).forEach(key => console.log('key is ${key}, value: ${person[key]}'));
//console.log(Object.entries(person));



//const users = [
//    { name: 'Sasha', age: 28 },
//    { name: 'Anna', age: 24 },
//    { name: 'Ivan', age: 30 },
//
//]

//users.push({ name: 'Olga', age: 26 });
//console.log(users);

//for (const user of users) {
//    console.log(user.name);
//}


//const filteredUsers = users.filter(user => user.age >= 25);

//console.log(filteredUsers);






//const person = {
//    name: 'Sasha',
//    age: 28,
//    email: 'test@gmail.com',
//    country: 'Poland',
//}



//const { email, name: userName, age } = person;
//console.log(userName);


//const user = [
//    { name: 'Sasha', age: 28, email: 'test1@gmail.com' },
//    { name: 'Anna', age: 24, email: 'test2@gmail.com' },
//    { name: 'Ivan', age: 30, email: 'test3@gmail.com}' }
//];
//for (const { name, email } of user) {
//    console.log('Name: ${name}, Email: ${email}');
//    console.log(`Name: ${name}, Email: ${email}`);
//}



//const obj = {
//    a: '123',
//    b: '456',
//}

//const obj2 = structuredClone(obj);

//Object.B = '789';

//console.log(obj2);


//function greet() {
//    console.log('Hello, my name is ${this.name}');
//}

//const person1 = { name: 'Sasha' };
//const person2 = { name: 'Anna' };

//call
//greet.call(person2, 'firstName', 'lastName');

//apply
//greet.apply(person2, ['firstName', 'lastName']);

//bind
//const greetPerson1 = greet.bind(person1);

//greetPerson1('Test1', 'Test2');


//const myMap = new Map();
//myMap.set('key1', 'value1');

//shop
//methods: addItem, printItems, printItems











