var student = {
    name: 'Andres',
    age: '25',
    city: 'Pleasant Grove'
};

for (var key in student) {
    console.log(key + " => " + student[key]);
}