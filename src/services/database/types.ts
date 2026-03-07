import type * as SQLite from 'expo-sqlite'

export interface Migration {
  version: number
  name: string
  up: (db: SQLite.SQLiteDatabase) => Promise<void>
}

export interface SchemaVersion {
  version: number
}