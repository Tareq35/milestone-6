const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

// const bigNumbers = numbers.filter(n => n > 30);
// console.log(bigNumbers);
// const tiny = numbers.filter(n => n < 10);
// console.log(tiny);
// const even = numbers.filter(n => n % 2 === 0);
// console.log(even);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 23000}
];

// const expensive = products.filter(p => p.price > 100000)
const expensive = products.filter(p => p.price > 10000)
console.log(expensive)