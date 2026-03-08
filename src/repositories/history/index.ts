import { dbService } from "@services/database"

import { HistoryEntry, HistorySession } from "@dtos/history"

import { LIST_SESSIONS, GET_SESSION_ENTRIES } from "./sql"

type SessionRow = {
  id: string
  played_at: number
  total: number
  correct: number
}

type EntryRow = {
  question_id: string
  question_title: string
  answer: string
  correct_answer: string
  is_correct: number
}

export class HistoryRepository {
  private get db() {
    return dbService.connect()
  }

  async findAll(): Promise<HistorySession[]> {
    const sessionRows = await this.db.getAllAsync<SessionRow>(LIST_SESSIONS)

    return Promise.all(
      sessionRows.map(async (row) => {
        const entryRows = await this.db.getAllAsync<EntryRow>(
          GET_SESSION_ENTRIES,
          { $sessionId: row.id }
        )

        return {
          id: row.id,
          playedAt: new Date(row.played_at),
          total: row.total,
          correct: row.correct,
          entries: entryRows.map(mapEntry)
        } satisfies HistorySession
      })
    )
  }

  async findById(sessionId: string): Promise<HistorySession | null> {
    const sessionRow = await this.db.getFirstAsync<SessionRow>(
      `SELECT
        s.id,
        s.played_at,
        COUNT(a.id) AS total,
        SUM(CASE WHEN a.value = ca.value THEN 1 ELSE 0 END) AS correct
       FROM session s
       LEFT JOIN answer a ON a.session_id = s.id
       LEFT JOIN correct_answer ca ON ca.question_id = a.question_id
       WHERE s.id = $sessionId`,
      { $sessionId: sessionId }
    )

    if (!sessionRow) return null

    const entryRows = await this.db.getAllAsync<EntryRow>(GET_SESSION_ENTRIES, {
      $sessionId: sessionId
    })

    return {
      id: sessionRow.id,
      playedAt: new Date(sessionRow.played_at),
      total: sessionRow.total,
      correct: sessionRow.correct,
      entries: entryRows.map(mapEntry)
    }
  }
}

function mapEntry(e: EntryRow): HistoryEntry {
  return {
    questionId: e.question_id,
    questionTitle: e.question_title,
    answer: e.answer,
    correctAnswer: e.correct_answer,
    isCorrect: e.is_correct === 1
  }
}
