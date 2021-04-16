// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let resArr = [];
    array.forEach((item, index) => {
        for (let i = 0; i <= index; i++) {
            if (!resArr[i]) {
                resArr[i] = [];
            }
            if (resArr[i].length < size) {
                resArr[i] = [...resArr[i], item];
                break;
            }
        }
    });

    return resArr;
}


module.exports = chunk;
