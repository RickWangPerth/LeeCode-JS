var createCounter = function(n) {
    
    return () => n ++;

};

counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
