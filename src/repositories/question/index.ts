import { IQuestion } from "@dtos/question"

export function QuestionRepository() {
  async function findRandom(quantity: number): Promise<IQuestion[]> {
    // TODO: query
    return []
  }

  return {
    findRandom
  }
}
