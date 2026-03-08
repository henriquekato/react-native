import type * as SQLite from "expo-sqlite"

import type { Migration } from "../types"

export const migration_001: Migration = {
  version: 1,
  name: "create_initial_tables",
  up: async (db: SQLite.SQLiteDatabase) => {
    await createSystemTables(db)
  }
}

export async function createSystemTables(db: SQLite.SQLiteDatabase) {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS question (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      type TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS question_option (
      id TEXT PRIMARY KEY,
      question_id TEXT NOT NULL,
      label TEXT NOT NULL,
      value TEXT NOT NULL,
      FOREIGN KEY (question_id) REFERENCES question(id)
    );

    CREATE TABLE IF NOT EXISTS correct_answer (
      id TEXT PRIMARY KEY,
      question_id TEXT NOT NULL,
      value TEXT NOT NULL,
      FOREIGN KEY (question_id) REFERENCES question(id)
    );

    CREATE TABLE IF NOT EXISTS answer (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      question_id TEXT NOT NULL,
      value TEXT NOT NULL,
      FOREIGN KEY (question_id) REFERENCES question(id)
    );

    CREATE INDEX IF NOT EXISTS idx_answer_question_id
    ON answer(question_id);

    CREATE INDEX IF NOT EXISTS idx_option_question_id
    ON question_option(question_id);
  `)
}
