"use strict";
function intersectionOfTwoArray(arrayOne, arrayTwo) {
    var hashMap = new Map();
    var result = [];
    for (var i = 0; i < arrayOne.length; i++) {
        hashMap.set(arrayOne[i], true);
    }
    for (var i = 0; i < arrayTwo.length; i++) {
        if (hashMap.has(arrayTwo[i])) {
            result.push(arrayTwo[i]);
        }
    }
    return result;
}
console.log(intersectionOfTwoArray([1, 2, 3, 4], [3, 4, 5, 6]));
