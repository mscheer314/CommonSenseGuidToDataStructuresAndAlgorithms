function firstNonDupe(input: string): string {
  let hashTable = {}
  for (let i = 0; i < input.length; i++) {
    if (hashTable[input[i]]) {
      hashTable[input[i]]++)
    } else {
      hashTable[input[i]] = 1
    }
  }
  for (let j = 0; j < input.length; j++) {
    if (hashTable[input[j]] == 1) {
      return input[j]
    }
  }
}

console.log(firstNonDupe('minimum'))
