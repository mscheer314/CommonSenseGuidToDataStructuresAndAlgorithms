function averageOfEvenNumbers(input) {
  let sum = 0
  let countOfEventNumber = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      sum += input[i]
      countOfEventNumber += 1
    }
  }

  return sum/countOfEventNumber
}

console.log(averageOfEvenNumbers([4,5,45,2,16,5,22,1,0,-2]))
