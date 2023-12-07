import { letterCounter } from './firstMission'
import { fullNameNormalizer } from './secondMission'

const firstMissionTester = (): void => {
  // arrange

  // act
  const firstTest = letterCounter('a', 'it was not part of their blood')
  const secondTest = letterCounter('b', 'It came to them very late')
  const thirdTest = letterCounter('i', 'With long arrears to make good, When the Saxon began to hate')

  // assert
  if (firstTest === 2) console.log('Deve contar quantas vezes uma letra aparece em um texto: Passou')
  else console.log('Deve contar quantas vezes uma letra aparece em um texto: Não passou')
  if (secondTest === 0) console.log('Deve contar quantas vezes uma letra aparece em um texto: Passou')
  else console.log('Deve contar quantas vezes uma letra aparece em um texto: Não passou')
  if (thirdTest === 1) console.log('Deve contar quantas vezes uma letra aparece em um texto: Passou')
  else console.log('Deve contar quantas vezes uma letra aparece em um texto: Não passou')
}

const secondMissionTester = (): void => {
  // arrange

  // act
  const firstTest = fullNameNormalizer('cOrPoRaL MARLON brando')
  const secondTest = fullNameNormalizer('SARGEANT fabio BIle')
  const thirdTest = fullNameNormalizer('COLonel poliCARPO QuAResMA')

  // assert
  if (firstTest === 'Corporal Marlon Brando') console.log('Deve retornar uma string normalizada: Passou')
  else console.log('Deve retornar uma string normalizada: Não passou')
  if (secondTest === 'Sargeant Fabio Bile') console.log('Deve retornar uma string normalizada: Passou')
  else console.log('Deve retornar uma string normalizada: Não passou')
  if (thirdTest === 'Colonel Policarpo Quaresma') console.log('Deve retornar uma string normalizada: Passou')
  else console.log('Deve retornar uma string normalizada: Não passou')
}

export { firstMissionTester, secondMissionTester }
