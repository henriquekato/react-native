import type * as SQLite from 'expo-sqlite'

import { getMigrations } from './migrations'

import type { Migration, SchemaVersion } from './types'

export class MigrationManager {
  private readonly SCHEMA_VERSION_TABLE = 'schema_version'

  constructor(private db: SQLite.SQLiteDatabase) {}

  async runMigrations(): Promise<void> {
    await this.ensureSchemaVersionTableExists()

    const currentVersion = await this.getCurrentVersion()
    const pendingMigrations = this.getPendingMigrations(currentVersion)

    await this.executePendingMigrations(pendingMigrations)
  }

  private async ensureSchemaVersionTableExists(): Promise<void> {
    await this.db.execAsync(`
      CREATE TABLE IF NOT EXISTS ${this.SCHEMA_VERSION_TABLE} (
        version INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        applied_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `)
  }

  private async getCurrentVersion(): Promise<number> {
    const result = await this.db.getFirstAsync<SchemaVersion>(
      `SELECT MAX(version) as version FROM ${this.SCHEMA_VERSION_TABLE}`
    )

    const version = result?.version || 0

    return version
  }

  private getPendingMigrations(currentVersion: number): Migration[] {
    const allMigrations = getMigrations()
    return allMigrations.filter(migration => migration.version > currentVersion)
  }

  private async executePendingMigrations(
    migrations: Migration[]
  ): Promise<void> {
    if (migrations.length === 0) return
  

    for (const migration of migrations) {
      await this.executeMigration(migration)
    }
  }

  private async executeMigration(migration: Migration): Promise<void> {
    try {
      await migration.up(this.db)
      await this.recordMigration(migration)

    } catch (error) {
      throw error
    }
  }

  private async recordMigration(migration: Migration): Promise<void> {
    await this.db.runAsync(
      `INSERT INTO ${this.SCHEMA_VERSION_TABLE} (version, name) VALUES (?, ?)`,
      [migration.version, migration.name]
    )
  }

  async getAppliedMigrations(): Promise<
    Array<{ version: number; name: string; applied_at: string }>
  > {
    return await this.db.getAllAsync(
      `SELECT version, name, applied_at FROM ${this.SCHEMA_VERSION_TABLE} ORDER BY version`
    )
  }
}