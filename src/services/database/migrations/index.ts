import { migration_001 } from "./001_create_initial_tables"
import { migration_002 } from "./002_seed_questions"
import { migration_003 } from "./003_session_table"
import { migration_004 } from "./004_add_total_questions"
import { migration_005 } from "./005_add_chipmunks_questions"

import type { Migration } from "../types"

export const migrations: Migration[] = [
  migration_001,
  migration_002,
  migration_003,
  migration_004,
  migration_005
]

export function getMigrations(): Migration[] {
  return [...migrations].sort((a, b) => a.version - b.version)
}
