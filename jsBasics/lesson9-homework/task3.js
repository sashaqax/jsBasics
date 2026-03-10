//Nissan Skyline


const car1 = {
    brand: "Nissan",
    model: "Skyline",
    year: 2017
};


//BMW M5 F10
const car2 = {
    brand: "BMW",
    model: "M5 F10",
    owner: "Alex"
};



const car3 = {
    ...car1,
    ...car2
};



console.log(car3);