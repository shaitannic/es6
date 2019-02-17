function* inc (initialValue) {
    let value = initialValue;
    yield value;
    value = value + 1;
    yield value;
    value = value + 2;
    yield value;
    value = value + 3;
    yield value;
    value = value + 4;
}

var foo = inc(10);
console.log(foo.next());
console.log(foo.next());
console.log(foo.next());
console.log(foo.next());
console.log(foo.next());
console.log(foo.next());
