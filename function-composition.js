var compose = functions => {
    if (functions.length === 0) {
      return x => x;
    }
  
    return functions.reduceRight((prevFn, nextFn) => 
      x => nextFn(prevFn(x))
    );
  };

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(3))