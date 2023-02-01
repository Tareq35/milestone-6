// object destructuring
const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '01717658899',
    price: 4000
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const { phone, address } = fish;

console.log(phone, address);

//array destructuring.
const [first, another]= [44, 99, 88, 456];
console.log(first, another)