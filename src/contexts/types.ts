import { IQuestion } from "@dtos/question"

export interface QuestionEntry {
  answer: string
  question: IQuestion
}

export interface QuestionsContextData {
  answer: string
  questions: QuestionEntry[]
  currentQuestionIndex: number
  loadQuestions: () => Promise<void>
  handleAnswerPress: () => void
  handleAnswerChange: (answer: string) => void
}
