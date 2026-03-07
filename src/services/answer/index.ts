import { AnswerRepository } from '@repositories/answer'
import { CorrectAnswerRepository } from '@repositories/correct-answer'

export class AnswerService {
  private answerRepository = new AnswerRepository()
  private correctAnswerRepository = new CorrectAnswerRepository()

  async checkAnswer(sessionId: string, questionId: string, answer: string) {
    await this.answerRepository.save(sessionId, questionId, answer)

    const correctAnswer = await this.correctAnswerRepository.getByQuestionId(questionId)

    const isCorrect = answer.trim().toLowerCase() === correctAnswer.value.trim().toLowerCase()

    return {
      isCorrect,
      correctAnswer,
    }
  }
}