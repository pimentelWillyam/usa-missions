/* eslint-disable no-case-declarations */
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

// interfaces

interface IApp {
  start: () => void
}

interface ILocalDatabase {
  insertPerson: (person: Person) => void
  fetchPersonList: () => Person[]
}

interface IInterface {
  showMenu: () => void
  listPersons: () => void

}

// classes

class LocalDatabase implements ILocalDatabase {
  personList: Person[] = []

  insertPerson = (person: Person): void => {
    this.personList.push(person)
  }

  fetchPersonList = (): Person[] => {
    return this.personList
  }
}

class Interface implements IInterface {
  constructor (readonly localDatabase: ILocalDatabase) {}
  showMenu = (): void => {
    console.log('Olá, Usuário. Digite uma das opções abaixo:\n1 – Cadastrar\n2 – Listar\n0 – Sair')
  }

  listPersons = (): void => {
    const personList = this.localDatabase.fetchPersonList()
    console.log('Nome | E-mail | Idade')
    for (const person of personList) {
      console.log(`${person.name} | ${person.email} | ${person.age}`)
    }
    console.log('\n\n\n\n\n\n\n\n\n\n')
  }
}

class App implements IApp {
  constructor (readonly interfac: IInterface, readonly localDatabase: ILocalDatabase) {}

  start = async (): Promise<void> => {
    const rl = readline.createInterface({ input, output })
    let choice = '-1'
    while (parseInt(choice) !== 0) {
      this.interfac.showMenu()
      choice = await rl.question('Selecione a opção desejada\n')
      switch (choice) {
        case '0':
          rl.pause()
          return
        case '1':
          const name = await rl.question('Insira o nome da pessoa\n')
          const email = await rl.question('Insira o email da pessoa\n')
          const age = await rl.question('Insira a idade da pessoa\n')
          this.localDatabase.insertPerson({ name, email, age: parseInt(age) })
          break
        case '2':
          this.interfac.listPersons()
          break

        default:
          console.log('Opção inválida')
          break
      }
    }
  }
}

// types

interface Person {
  name: string
  email: string
  age: number
}

export { App, LocalDatabase, Interface }
