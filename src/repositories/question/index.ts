import { dbService } from "@services/database"

import { Question, QuestionOption } from "@dtos/question"

import { FIND_RANDOM_QUESTIONS, FIND_OPTIONS_BY_QUESTION_ID } from "./sql"

export class QuestionRepository {
  private get db() {
    return dbService.connect()
  }

  async findRandom(quantity: number): Promise<Question[]> {
    const rows = await this.db.getAllAsync<Question>(FIND_RANDOM_QUESTIONS, {
      $quantity: quantity
    })

    const questions = await Promise.all(
      rows.map(async (row) => {
        if (row.type !== "select") return row

        const options = await this.db.getAllAsync<QuestionOption>(
          FIND_OPTIONS_BY_QUESTION_ID,
          { $questionId: row.id }
        )

        return { ...row, options }
      })
    )

    return questions
  }
}
