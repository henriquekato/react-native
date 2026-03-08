import { dbService } from "@services/database"

import { INSERT_SESSION } from "./sql"

import { StartSessionParams } from "@services/history/types"

export class SessionRepository {
  private get db() {
    return dbService.connect()
  }

  async create({
    sessionId,
    totalQuestions
  }: StartSessionParams): Promise<void> {
    await this.db.runAsync(INSERT_SESSION, {
      $id: sessionId,
      $playedAt: Date.now(),
      $total: totalQuestions
    })
  }
}
