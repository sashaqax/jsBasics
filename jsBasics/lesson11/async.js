//console.log('Operation 1: ');
//let result1 = 5 + 5;
//console.log(`Result 1:${result1}`);



//console.log('Operation 2: ');
//let result2 = 51 + 5;
//console.log(`Result 2:${result2}`);


//console.log('Operation 3: ');
//let result3 = 51 + 5;
//console.log(`Result 3:${result3}`);



newFunction();

function newFunction() {
    const promiseA = Promise.resolve('Hello');
    const promiseB = Promise.resolve('Promise');
    const promiseC = Promise.resolve('All');
    const promisesCollection = Promise.all([promiseA, promiseB, promiseC]);

    promisesCollection.then(result => console.log(result));
}


const differedPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Diferred Hello');
    }, 2000);
});
differedPromise.then(result => console.log(result));

console.log('Operation 3: ');
let result4 = 511 + 5;
console.log(`Result 4:${result4}`);

console.log('Operation 4: ');
let result5 = 5111 + 5;
console.log(`Result 5:${result5}`);

console.log 