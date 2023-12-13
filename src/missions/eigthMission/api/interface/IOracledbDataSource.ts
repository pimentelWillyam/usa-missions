import type IFile from './IFile'
import type ILog from './IPerson'
import type IUser from './IUser'

interface IOracledbDataSource {
  start: () => Promise<boolean>
  startConnection: () => Promise<boolean>
  stopConnection: () => Promise<boolean>
  openConnectionPool: () => Promise<boolean>
  closeConnectionPool: () => Promise<boolean>
  createUserTable: () => Promise<boolean>
  createLogTable: () => Promise<boolean>
  createFileTable: () => Promise<boolean>
  logTableExists: () => Promise<boolean>
  fileTableExists: () => Promise<boolean>
  createNecessaryTables: () => Promise<boolean>
  insertFileRegistry: (id: string, name: string, title: string, date: string, description: string, type: string, base64: string) => Promise<IFile>
  insertLogRegistry: (id: string, date: string, message: string) => Promise<ILog>
  insertUserRegistry: (id: string, login: string, password: string, email: string, type: string) => Promise<IUser>
  getEveryFileRegistry: () => Promise<IFile[]>
  getEveryLogRegistry: () => Promise<ILog[]>
  getEveryUserRegistry: () => Promise<IUser[]>
  getFileBy: (parameter: string, value: string) => Promise<IFile | null>
  getLogBy: (parameter: string, value: string) => Promise<ILog | null>
  getUserBy: (parameter: string, value: string) => Promise<IUser | null>
  updateUserById: (id: string, login: string, password: string, email: string, type: string) => Promise<IUser>
  deleteFileById: (id: string) => Promise<boolean>
  deleteUserById: (id: string) => Promise<boolean>
}

export default IOracledbDataSource
