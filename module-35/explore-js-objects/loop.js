const numbers = [12, 54, 65, 3, 54];
// for (const number of numbers) {
//     console.log(number);
// }

//for of can not be used with object
const bottle = { color: 'Yellow', price: 50, isCleaned: true, capacity: 1 };
// first option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys);
for (const key of keys) {
    // console.log(key, bottle[key]);
}

// for in loop
for (const key in bottle) {
    // console.log(key, bottle[key]);
    const value= bottle[key];
    console.log(key, value);
}

