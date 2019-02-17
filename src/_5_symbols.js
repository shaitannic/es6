// Для создания собственного символа
var mystery = Symbol();

// Если создавать через new Symbol() будет TypeError
try {
    var oops = new Symbol();
} catch (error) {
    console.log(error);                         // TypeError
}

// Символы - иммутабельны
console.log(Symbol() === Symbol());             // false
console.log(Symbol('foo') === Symbol('foo'));   // false

// Symbol имеет тип 'symbol'
console.log(typeof Symbol());                   // 'symbol'
console.log(typeof Symbol('foo'));              // 'symbol'

// Существует несколько регистров, где хранятся символы:
// runtime-wide symbol registry. Существует два метода, чтобы добавить символ в этот регистр
// Symbol.for(key) - этот метод ищет символ по ключю key в runtime-wide symbol registry
// Если символ найден в глобальном регистре, то он возвращается. Иначе - создается
// Операция Symbol.for(key) идемпотентна. Идемпотентность - свойство объекта или операции
// при повторном применении операции к объекту давать тот же результат, что и при первом

Symbol.for('foo') === Symbol.for('foo'); // true

// В выражении выше, при первом вызове Symbol.for('foo') создается символ,
// добавляется в регистр и возвращается. Второй вызов возвращает тот же символ, потому что
// key уже добавлен в регистр

var symbol = Symbol.for('foo');
console.log(Symbol.keyFor(symbol)); // 'foo'
// Возвращает значение, которое ассоциируется с символом

var foo = {
    [Symbol()]: 'foo',
    [Symbol('foo')]: 'bar',
    [Symbol.for('bar')]: 'baz',
    what: 'ever'
}

console.log(foo);                               // выведет объект со всеми свойствами
console.log([...foo]);                          // []
console.log(Object.keys(foo));                  // ["what"]
console.log(JSON.stringify(foo));               // {"what":"ever"}
console.log(Object.getOwnPropertyNames(foo));   // ["what"]
console.log(Object.getOwnPropertySymbols(foo)); // [Symbol(), Symbol(foo), Symbol(bar)]

for (let key in foo) {
    console.log(key);               // what
}

// Символы используют для:
// 1. Коллизий имен
// 2. Приватность. Символы не видны для всех "reflection" методов до ES6
// 3. Определение протоколов. Например, Symbol.iterator
