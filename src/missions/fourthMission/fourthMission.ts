// incompleted

const caesarCypher = (text: string, key: number): string => {
  let cypher: string = ''
  for (const letter of text) {
    cypher += letterMover(letter, key)
  }
  return cypher
}

const letterMover = (letter: string, timesToMoveRight: number): string => {
  const smallCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'; const bigCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  if (smallCaseAlphabet.includes(letter)) return smallCaseAlphabet[smallCaseAlphabet.indexOf(letter) + timesToMoveRight]
  if (bigCaseAlphabet.includes(letter)) return bigCaseAlphabet[bigCaseAlphabet.indexOf(letter) + timesToMoveRight]
  else return ' '
}
export { caesarCypher }
