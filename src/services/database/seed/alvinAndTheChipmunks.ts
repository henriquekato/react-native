import type * as SQLite from "expo-sqlite"

export async function seedAlvinAndTheChipmunksQuestions(
  db: SQLite.SQLiteDatabase
) {
  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q11",
    "Qual esquilo usa roupa vermelha? (Alvin e os Esquilos)",
    "select"
  ])
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q11_1", "q11", "Alvin", "Alvin"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q11_2", "q11", "Simon", "Simon"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q11_3", "q11", "Theodore", "Theodore"]
  )
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca11", "q11", "Alvin"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q12",
    "Qual esquilo usa roupa azul? (Alvin e os Esquilos)",
    "select"
  ])
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q12_1", "q12", "Alvin", "Alvin"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q12_2", "q12", "Simon", "Simon"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q12_3", "q12", "Theodore", "Theodore"]
  )
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca12", "q12", "Simon"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q13",
    "Qual esquilo usa roupa verde? (Alvin e os Esquilos)",
    "select"
  ])
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q13_1", "q13", "Alvin", "Alvin"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q13_2", "q13", "Simon", "Simon"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q13_3", "q13", "Theodore", "Theodore"]
  )
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca13", "q13", "Theodore"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q14",
    "Qual esquilo é o líder do grupo? (Alvin e os Esquilos)",
    "select"
  ])
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q14_1", "q14", "Alvin", "Alvin"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q14_2", "q14", "Simon", "Simon"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q14_3", "q14", "Theodore", "Theodore"]
  )
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca14", "q14", "Alvin"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q15",
    "Qual esquilo é o mais inteligente? (Alvin e os Esquilos)",
    "select"
  ])
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q15_1", "q15", "Alvin", "Alvin"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q15_2", "q15", "Simon", "Simon"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q15_3", "q15", "Theodore", "Theodore"]
  )
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca15", "q15", "Simon"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q16",
    "Qual esquilo gosta muito de comer? (Alvin e os Esquilos)",
    "select"
  ])
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q16_1", "q16", "Alvin", "Alvin"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q16_2", "q16", "Simon", "Simon"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q16_3", "q16", "Theodore", "Theodore"]
  )
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca16", "q16", "Theodore"]
  )
}
