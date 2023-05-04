function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // storing a value to compare against
    const tempValue = array[i];
    // value to the left of tempValue. this is what we
    // will compare against tempValue.
    let position = i - 1;
    // while position has not moved to the left end of the array
    // and tempValue is less than the array at position
    while (position >= 0 && tempValue < array[position]) {
      // shift the value in array[postion]
      array[position + 1] = array[position];
      // move position to the left in the array
      position--;
    }
    array[position + 1] = tempValue;
  }
  return array;
}

console.log(insertionSort([5, 3, 7, 45, 3, 7, 5, 0]));
