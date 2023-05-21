"use strict";
function firstNonDupe(input) {
    var hashTable = {};
    for (var i = 0; i < input.length; i++) {
        if (hashTable[input[i]]) {
            hashTable[input[i]]++;
        }
        else {
            hashTable[input[i]] = 1;
        }
    }
    for (var j = 0; j < input.length; j++) {
        if (hashTable[input[j]] == 1) {
            return input[j];
        }
    }
}
console.log(firstNonDupe('minimum'));
