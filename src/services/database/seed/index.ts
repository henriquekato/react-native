import type * as SQLite from "expo-sqlite"

export async function seedQuestions(db: SQLite.SQLiteDatabase) {
  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q1",
    "Qual é a capital do Brasil?",
    "text"
  ])
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca1", "q1", "Brasília"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q2",
    "Quem criou o Linux?",
    "text"
  ])
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca2", "q2", "Linus Torvalds"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q3",
    "Qual linguagem de programação é usada no React Native?",
    "text"
  ])
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca3", "q3", "JavaScript"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q4",
    "Qual é o maior planeta do sistema solar?",
    "text"
  ])
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca4", "q4", "Júpiter"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q5",
    "Qual empresa desenvolveu o sistema operacional Android?",
    "text"
  ])
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca5", "q5", "Google"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q6",
    "Qual é o nome do framework CSS utilitário mais popular no mundo?",
    "text"
  ])
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca6", "q6", "Tailwind CSS"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q7",
    "Qual planeta é conhecido como o planeta vermelho?",
    "select"
  ])
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q7_1", "q7", "Terra", "terra"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q7_2", "q7", "Marte", "marte"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q7_3", "q7", "Júpiter", "jupiter"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q7_4", "q7", "Saturno", "saturno"]
  )
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca7", "q7", "marte"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q8",
    "Qual das opções é uma linguagem de programação compilada?",
    "select"
  ])
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q8_1", "q8", "Python", "python"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q8_2", "q8", "JavaScript", "javascript"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q8_3", "q8", "Go", "go"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q8_4", "q8", "Ruby", "ruby"]
  )
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca8", "q8", "go"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q9",
    "Qual é o protocolo base da comunicação na internet?",
    "select"
  ])
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q9_1", "q9", "FTP", "ftp"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q9_2", "q9", "HTTP", "http"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q9_3", "q9", "TCP/IP", "tcpip"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q9_4", "q9", "SSH", "ssh"]
  )
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca9", "q9", "tcpip"]
  )

  await db.runAsync(`INSERT INTO question (id, title, type) VALUES (?, ?, ?)`, [
    "q10",
    "Qual gerenciador de pacotes é nativo do Node.js?",
    "select"
  ])
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q10_1", "q10", "yarn", "yarn"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q10_2", "q10", "pnpm", "pnpm"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q10_3", "q10", "npm", "npm"]
  )
  await db.runAsync(
    `INSERT INTO question_option (id, question_id, label, value) VALUES (?, ?, ?, ?)`,
    ["opt_q10_4", "q10", "bun", "bun"]
  )
  await db.runAsync(
    `INSERT INTO correct_answer (id, question_id, value) VALUES (?, ?, ?)`,
    ["ca10", "q10", "npm"]
  )
}
