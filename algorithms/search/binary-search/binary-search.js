function binarySearch(arr, num) {
    var low = 0;
    var high = arr.length;
    var pos = -1;

    while (low <= high) {
        var mid = parseInt((low + high) / 2);
        if (num == arr[mid]) {
            pos = mid;
            break;
        } else if (num < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return pos;
}

module.exports = binarySearch;
