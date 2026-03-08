import type * as SQLite from "expo-sqlite"

import { seedAlvinAndTheChipmunksQuestions } from "../seed"

import type { Migration } from "../types"

export const migration_005: Migration = {
  version: 5,
  name: "add_chipmunks_questions",
  up: async (db: SQLite.SQLiteDatabase) => {
    await seedAlvinAndTheChipmunksQuestions(db)
  }
}
