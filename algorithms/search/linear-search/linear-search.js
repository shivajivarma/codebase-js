function linearSearch(arr, search) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search)     /* if required element found */
      return i;
  }

  return -1;
}

module.exports = linearSearch;