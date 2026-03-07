import { dbService } from '@services/database'

import { SAVE_ANSWER } from './sql'

export class AnswerRepository {
  private get db() {
    return dbService.connect()
  }

  async save(sessionId: string, questionId: string, value: string): Promise<void> {
    await this.db.runAsync(SAVE_ANSWER, { $sessionId: sessionId, $questionId: questionId, $value: value })
  }
}