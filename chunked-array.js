var chunk = function(arr, size) {
    var index = 0;
    var chunkedArr = []
    while (index < arr.length){
        chunkedArr.push(arr.slice(index, index + size));
        index += size;
    }

    return chunkedArr;
};
