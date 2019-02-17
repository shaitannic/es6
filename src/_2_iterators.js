// https://frontender.info/es6-in-depth-iterators-and-the-for-of-loop/

// Итератор - поведенческий шаблон проектирования
// Представляет собой объект, позволяющий получить последовательный доступ к элементам объекта-агрегата

// Например, такие элементы как дерево, связанный список, хэш-таблица и массив
// могут быть пролистаны с помощью объекта Итератор

// В JavaScript общее у объектов Array, Map, Set, String в том, что у них у всех есть метод-итератор
// Именно поэтому они могут использоваться в циклах for-of

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

// Цикл for-of начинается с вызова метода [Symbol.iterator]()
// [Symbol.iterator] возвращает объект итератор
// Итератором может быть любой объект с методос next
// Цикл будет вызывать метод next() раз за разом, по одному за один проход цикла
for (let pony of foo) {
    console.log(pony);
}

const customIterator = {
    items: [1,2,3,4,5],
    // В стандарте ES6 в качестве имени для функции-итератора используется символ вместо строки
    // Это гарантирует, что не возникнет коллизий с уже ранее реализованными методами с именем .iterator 
    [Symbol.iterator]: function() {
        return this;
    },
    next: function() {
        // Всякий раз, когда метод next() вызывается, он возвращает один и тот же результат
        // говоря циклу for-of, закончили ли мы с итерированием или нет
        // и что следующее значение будет таким-то
        return {
            done: this.items.length === 0,
            value: this.items.shift()
        };
    }
}

for (let el of customIterator) {
    console.log(el);
}
