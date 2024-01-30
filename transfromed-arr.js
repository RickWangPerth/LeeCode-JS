var map = function(arr, fn) {
    for (let i = 0;i< arr.length; i++){
        arr[i] = fn(arr[i], i);
    }
    return arr;
};

arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
console.log(map(arr, fn)); // [1,3,5]