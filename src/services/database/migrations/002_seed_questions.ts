import type * as SQLite from "expo-sqlite"

import type { Migration } from "../types"

import { seedQuestions } from "../seed"

export const migration_002: Migration = {
  version: 2,
  name: "seed_questions",
  up: async (db: SQLite.SQLiteDatabase) => {
    await seedQuestions(db)
  }
}
