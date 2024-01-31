var reduce = function(nums, fn, init) {
    var sum = init
    for (let i = 0; i < nums.length; i++ ){
        sum = fn(sum, nums[i])
    }
    return sum
};

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0

console.log(reduce(nums, fn, init))