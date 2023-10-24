const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } };
console.log(JSON.stringify(obj));

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));

console.log('{ "a": 1.5, "b": string, true, "c": {}, "d": []');