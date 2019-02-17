const obj = {
    first: 1,
    second: 2,
    third: () => 5
};

const myArray = [1,2,3,4];
myArray.name = 'Andrew';

for (var el in obj) {
    console.log(el); // "first", "second", "third"
}

for (var el in myArray) {
    console.log(el); // "0", "1", "2", "3", "name"
}
