var cancellable = function(fn, args, t) {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);

    let cancelFn = () => clearInterval(timer);
    return cancelFn;
};
// https://leetcode.com/problems/interval-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript