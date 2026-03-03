import { AnswerRepository } from "@repositories/answer"
import { CorrectAnswerRepository } from "@repositories/correct-answer"

export function AnswerService() {
  const answerRepository = AnswerRepository()
  const correctAnswerRepository = CorrectAnswerRepository()

  async function checkAnswer(questionId: string, answer: string) {
    await answerRepository.save(questionId, answer)

    const correctAnswer =
      await correctAnswerRepository.getByQuestionId(questionId)

    const isCorrect = answer === correctAnswer.text

    return {
      isCorrect,
      correctAnswer
    }
  }

  return {
    checkAnswer
  }
}
