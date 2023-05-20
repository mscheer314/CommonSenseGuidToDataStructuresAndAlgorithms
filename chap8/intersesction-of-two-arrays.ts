function intersectionOfTwoArray(arrayOne: number[], arrayTwo: number[]) {
  const hashMap = new Map<number, boolean>()
  const result = []

  for (let i = 0; i < arrayOne.length; i++) {
    hashMap.set(arrayOne[i], true)
  }
  for (let i = 0; i < arrayTwo.length; i++) {
    if (hashMap.has(arrayTwo[i])) {
      result.push(arrayTwo[i])
    }
  }
  return result
}


console.log(intersectionOfTwoArray([1,2,3,4], [3,4,5,6]))
