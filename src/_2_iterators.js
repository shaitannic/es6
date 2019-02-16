var foo = {
    name: 'Andrew',
    [Symbol.iterator]: () => ({
        items: ['p', 'o', 'n', 'y', 'f', 'o', 'o'],
        next: function next() {
            return {
                done: this.items.length === 0,
                value: this.items.shift()
            }
        }
    })
}

foo.forEach(pony => {
    console.log(pony);
});

