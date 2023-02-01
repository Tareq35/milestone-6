const users = [
    {
        id: 1, 
        name: 'abul',
        job: 'doctor'
    }
]

// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'}
    ]
}
const firstName= data.data[0].name;
console.log(firstName);