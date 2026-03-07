import { Question } from '@dtos/question'

export interface QuestionEntry {
  question: Question
  answer: string
}

export interface QuestionResult {
  question: Question
  answer: string
  isCorrect: boolean
  correctAnswer: string
}

export interface QuestionsContextData {
  answer: string
  questions: QuestionEntry[]
  results: QuestionResult[]
  totalQuestions: number
  currentQuestionIndex: number
  loadQuestions: () => Promise<void>
  handleAnswerPress: () => Promise<void>
  handleAnswerChange: (value: string) => void
  increaseQuestionCount: () => void
  decreaseQuestionCount: () => void
}