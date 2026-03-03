import { createContext, PropsWithChildren, useContext, useState } from "react"
import { useRouter } from "expo-router"

import { QuestionService } from "@services/question"

import { TOTAL_QUESTIONS } from "./constants"

import { QuestionEntry, QuestionsContextData } from "./types"

const QuestionsContext = createContext({} as QuestionsContextData)

function QuestionsContextProvider({ children }: PropsWithChildren) {
  const [answer, setAnswer] = useState("")
  const [questions, setQuestions] = useState<QuestionEntry[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const { push } = useRouter()

  async function loadQuestions() {
    const questions = await QuestionService().getRandoms(TOTAL_QUESTIONS)
    const questionsWithAnswers = questions.map((question) => ({
      question,
      answer: ""
    }))
    setQuestions(questionsWithAnswers)
  }

  function setupNextQuestion() {
    if (questions.length <= 0) return

    setAnswer("")

    setCurrentQuestionIndex((prev) => prev + 1)
  }

  function handleAnswerPress() {
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
      const nextQuestions = [...questions]
      nextQuestions[currentQuestionIndex] = {
        answer,
        question: nextQuestions[currentQuestionIndex].question
      }
      setQuestions(nextQuestions)

      setupNextQuestion()
      return
    }

    push("/result")
  }

  return (
    <QuestionsContext.Provider
      value={{
        answer,
        questions,
        currentQuestionIndex,
        loadQuestions,
        handleAnswerPress,
        handleAnswerChange: setAnswer
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
