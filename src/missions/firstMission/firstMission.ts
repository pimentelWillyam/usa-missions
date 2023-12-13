const letterCounter = (expectedLetter: string, text: string): number => {
  let counter = 0

  for (const letter of text) {
    if (letter === expectedLetter) counter++
  }
  console.log(`A quantidade de caracteres “${expectedLetter}" na frase é: ${counter}`)
  return counter
}

export { letterCounter }
