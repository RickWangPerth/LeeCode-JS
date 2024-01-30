var createCounter = function(init) {
    let number = init
    return {
        increment: () => ++number,
        decrement: () => --number,
        reset: () => number = init,

    }
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4