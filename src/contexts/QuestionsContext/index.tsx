import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState
} from "react"
import { useRouter } from "expo-router"

import { QuestionService } from "@services/question"
import { AnswerService } from "@services/answer"
import { HistoryService } from "@services/history"

import { MIN_QUESTIONS, MAX_QUESTIONS } from "./constants"

import { QuestionEntry, QuestionResult, QuestionsContextData } from "./types"

const QuestionsContext = createContext({} as QuestionsContextData)

function QuestionsContextProvider({ children }: PropsWithChildren) {
  const questionService = new QuestionService()
  const answerService = new AnswerService()
  const historyService = new HistoryService()

  const sessionId = useRef("")

  const [answer, setAnswer] = useState("")
  const [questions, setQuestions] = useState<QuestionEntry[]>([])
  const [results, setResults] = useState<QuestionResult[]>([])
  const [totalQuestions, setTotalQuestions] = useState(1)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const { replace } = useRouter()

  async function loadQuestions() {
    sessionId.current = `session_${Date.now()}`
    await historyService.startSession({
      sessionId: sessionId.current,
      totalQuestions
    })

    const fetched = await questionService.getRandoms(totalQuestions)
    setQuestions(fetched.map((question) => ({ question, answer: "" })))
    setResults([])
    setCurrentQuestionIndex(0)
  }

  async function handleAnswerPress() {
    const currentEntry = questions[currentQuestionIndex]

    const { isCorrect, correctAnswer } = await answerService.checkAnswer(
      sessionId.current,
      currentEntry.question.id,
      answer
    )

    const result: QuestionResult = {
      question: currentEntry.question,
      answer,
      isCorrect,
      correctAnswer: correctAnswer.value
    }

    setResults((prev) => [...prev, result])

    setQuestions((prev) => {
      const next = [...prev]
      next[currentQuestionIndex] = { ...next[currentQuestionIndex], answer }
      return next
    })

    setAnswer("")

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      return
    }

    replace("/result")
  }

  function increaseQuestionCount() {
    setTotalQuestions((prev) => (prev === MAX_QUESTIONS ? prev : prev + 1))
  }

  function decreaseQuestionCount() {
    setTotalQuestions((prev) => (prev > MIN_QUESTIONS ? prev - 1 : prev))
  }

  return (
    <QuestionsContext.Provider
      value={{
        answer,
        questions,
        results,
        totalQuestions,
        currentQuestionIndex,
        loadQuestions,
        handleAnswerPress,
        handleAnswerChange: setAnswer,
        increaseQuestionCount,
        decreaseQuestionCount
      }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}

function useQuestions() {
  const context = useContext(QuestionsContext)

  if (!context) {
    throw new Error(
      "useQuestions must be used within a QuestionsContextProvider"
    )
  }

  return context
}

export { useQuestions, QuestionsContextProvider }
