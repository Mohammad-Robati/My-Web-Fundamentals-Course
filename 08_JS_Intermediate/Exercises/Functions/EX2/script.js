function kebabToSnake(str) {
    return str.replace(/-/g,"_");
}

console.log(kebabToSnake('hello-world'));
console.log(kebabToSnake('hello-world-to-all'));
console.log(kebabToSnake('hello'));