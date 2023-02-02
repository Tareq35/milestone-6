const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(n => n/3);

// console.log(half);
// console.log(thirds);

const friends= ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = friends.map(f => f[0]);
// console.log(firstLetters);
const nameLengths= friends.map(f => f.length);
// console.log(nameLengths)

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 23000}
];

const items = products.map(product => product.name);
const prices = products.map(product => product.price);
console.log(items);
console.log(prices);