import { QuestionRepository } from "@repositories/question"

import { IQuestion } from "@dtos/question"

export function QuestionService() {
  const repo = QuestionRepository()

  async function getRandoms(quantity: number): Promise<IQuestion[]> {
    const questions = await repo.findRandom(quantity)

    return questions
  }

  return {
    getRandoms
  }
}
