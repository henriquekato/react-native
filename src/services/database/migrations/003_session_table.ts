import type * as SQLite from 'expo-sqlite'

import type { Migration } from '../types'

export const migration_003: Migration = {
  version: 3,
  name: 'add_session',
  up: async (db: SQLite.SQLiteDatabase) => {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS session (
        id TEXT PRIMARY KEY,
        played_at INTEGER NOT NULL
      );

      ALTER TABLE answer ADD COLUMN session_id TEXT REFERENCES session(id);

      CREATE INDEX IF NOT EXISTS idx_answer_session_id
      ON answer(session_id);
    `)
  }
}