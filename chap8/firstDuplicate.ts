function firstDuplicate(input: string[]) {
  const hashMap = new Map<string, boolean>()
  for (let i = 0; i < input.length; i++) {
    if (!hashMap.has(input[i])) {
      hashMap.set(input[i], true)
    } else {
      return input[i]
    }
  }
}

console.log(firstDuplicate(['a', 'b', 'c', 'd', 'c', 'e', 'b']))
