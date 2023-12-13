const consonantCounter = (text: string): number => {
  let consonantCounter = 0
  for (const letter of text) {
    if (consonantList.includes(letter)) consonantCounter++
  }
  return consonantCounter
}

const binaryValueGenerator = (text: string): string => {
  const binaryValue = ['0', '0', '0', '0', '0']

  for (const letter of text) {
    if (letter === 'a') binaryValue[0] = '1'
    else if (letter === 'e') binaryValue[1] = '1'
    else if (letter === 'i') binaryValue[2] = '1'
    else if (letter === 'o') binaryValue[3] = '1'
    else if (letter === 'u') binaryValue[4] = '1'
  }
  return parseInt(binaryValue[0] + binaryValue[1] + binaryValue[2] + binaryValue[3] + binaryValue[4], 2).toString()
}

const crcCaulculator = (text: string): string => {
  const loweredText = text.toLowerCase()
  const consonantsSum = consonantCounter(loweredText); let normalizedConsonantSum

  if (consonantsSum < 10) normalizedConsonantSum = '0' + consonantsSum.toString()
  else normalizedConsonantSum = consonantsSum.toString()

  const binaryValue = binaryValueGenerator(loweredText)
  return binaryValue + normalizedConsonantSum
}

const consonantList = 'bcdfghjklmnpqrstvwxyz'

export { crcCaulculator }
