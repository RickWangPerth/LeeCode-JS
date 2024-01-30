var createHelloWorld = function() {
    
    return () => "Hello World";
    
};

var plus = (a,b) => a + b;

const f = createHelloWorld();
const g = plus(1,2);
console.log(g);
console.log(f());