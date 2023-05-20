"use strict";
function allLettersOfAlphabetExceptOne(input) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var hashMap = new Map();
    for (var i = 0; i < input.length; i++) {
        hashMap.set(input[i], true);
    }
    for (var i = 0; i < alphabet.length; i++) {
        if (!hashMap.has(alphabet[i])) {
            return input[i];
        }
    }
}
console.log(allLettersOfAlphabetExceptOne('the quick brown box jumps over a lazy dog'));
