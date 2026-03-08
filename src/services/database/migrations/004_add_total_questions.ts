import type * as SQLite from "expo-sqlite"

import type { Migration } from "../types"

export const migration_004: Migration = {
  version: 4,
  name: "add_total_questions",
  up: async (db: SQLite.SQLiteDatabase) => {
    await db.execAsync(`
      ALTER TABLE session ADD COLUMN total INTEGER NOT NULL DEFAULT 0;
    `)
  }
}
