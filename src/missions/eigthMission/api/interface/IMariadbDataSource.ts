import type IFile from './IFile'
import type ILog from './IPerson'
import type IUser from './IUser'

interface IMariadbDataSource {
  bootstrap: () => Promise<boolean>
  startConnection: () => Promise<boolean>
  stopConnection: () => Promise<boolean>
  openConnectionPool: () => Promise<boolean>
  closeConnectionPool: () => Promise<boolean>
  intranetDatabaseExists: () => Promise<boolean>
  createIntranetDatabase: () => Promise<boolean>
  useIntranetDatabase: () => Promise<boolean>
  createFileTable: () => Promise<boolean>
  createLogTable: () => Promise<boolean>
  createUserTable: () => Promise<boolean>
  tableExists: (tableName: string) => Promise<boolean>
  createNecessaryTables: () => Promise<boolean>
  insertFileRegistry: (id: string, name: string, title: string, description: string, type: string, date: string, path: string) => Promise<IFile>
  insertLogRegistry: (id: string, date: string, message: string) => Promise<ILog>
  insertUserRegistry: (id: string, loginlogin: string, password: string, email: string, type: string) => Promise<IUser>
  getEveryFileRegistry: () => Promise<IFile[]>
  getEveryLogRegistry: () => Promise<ILog[]>
  getEveryUserRegistry: () => Promise<IUser[]>
  getFileBy: (parameter: string, value: string) => Promise<IFile[]>
  getLogBy: (parameter: string, value: string) => Promise<ILog[]>
  getUserBy: (parameter: string, value: string) => Promise<IUser[]>
  updateUserById: (id: string, login: string, password: string, email: string, type: string) => Promise<IUser>
  deleteFileById: (id: string) => Promise<boolean>
  deleteUserById: (id: string) => Promise<boolean>
}

export default IMariadbDataSource
