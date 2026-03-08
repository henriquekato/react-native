import * as SQLite from "expo-sqlite"

import { MigrationManager } from "./MigrationManager"

class DatabaseService {
  private static instance: DatabaseService
  private db: SQLite.SQLiteDatabase | null = null
  private migrationManager: MigrationManager | null = null

  private readonly DB_NAME = "questions.db"

  static getInstance() {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService()
    }

    return DatabaseService.instance
  }

  public connect(): SQLite.SQLiteDatabase {
    if (!this.db) throw new Error("Database not initialized!")
    return this.db
  }

  public async initialize(): Promise<void> {
    if (this.db) return

    await this.openDatabase()
    await this.runMigrations()
  }

  private async openDatabase(): Promise<void> {
    try {
      this.db = await SQLite.openDatabaseAsync(this.DB_NAME)
      await this.db.execAsync(`
        PRAGMA journal_mode = WAL;
        PRAGMA foreign_keys = ON;
      `)
    } catch (error) {
      throw error
    }
  }

  private async runMigrations(): Promise<void> {
    if (!this.db) {
      throw new Error("Database not initialized!")
    }

    try {
      this.migrationManager = new MigrationManager(this.db)
      await this.migrationManager.runMigrations()
    } catch (error) {
      throw error
    }
  }
}

export const dbService = DatabaseService.getInstance()
