function allLettersOfAlphabetExceptOne(input: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const hashMap = new Map<string, boolean>()
  for (let i = 0; i < input.length; i++) {
    hashMap.set(input[i], true)
  }
  for (let i = 0; i < alphabet.length; i++) {
    if (!hashMap.has(alphabet[i])) {
      return input[i] 
    }
  }
}

console.log(allLettersOfAlphabetExceptOne('the quick brown box jumps over a lazy dog'))
