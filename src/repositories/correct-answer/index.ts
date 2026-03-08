import { dbService } from '@services/database'

import { CorrectAnswer } from '@dtos/correct-answer'

import { FIND_CORRECT_ANSWER_BY_QUESTION_ID } from './sql'

type CorrectAnswerRow = {
  id: string
  question_id: string
  value: string
}

export class CorrectAnswerRepository {
  private get db() {
    return dbService.connect()
  }

  async getByQuestionId(questionId: string): Promise<CorrectAnswer> {
    const row = await this.db.getFirstAsync<CorrectAnswerRow>(
      FIND_CORRECT_ANSWER_BY_QUESTION_ID,
      { $questionId: questionId }
    )

    if (!row) throw new Error(`Correct answer not found for question: ${questionId}`)

    return {
      id: row.id,
      questionId: row.question_id,
      value: row.value,
    }
  }
}