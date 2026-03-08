export interface HistoryEntry {
  questionId: string
  questionTitle: string
  answer: string
  correctAnswer: string
  isCorrect: boolean
}

export interface HistorySession {
  id: string
  playedAt: Date
  total: number
  correct: number
  entries: HistoryEntry[]
}