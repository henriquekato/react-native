import { QuestionRepository } from "@repositories/question"

import { Question } from "@dtos/question"

export class QuestionService {
  private repository = new QuestionRepository()

  async getRandoms(quantity: number): Promise<Question[]> {
    return this.repository.findRandom(quantity)
  }
}
