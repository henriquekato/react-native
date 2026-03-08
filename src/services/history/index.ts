import { HistoryRepository } from "@repositories/history"
import { SessionRepository } from "@repositories/session"

import { HistorySession } from "@dtos/history"
import { StartSessionParams } from "./types"

export class HistoryService {
  private historyRepository = new HistoryRepository()
  private sessionRepository = new SessionRepository()

  async startSession(params: StartSessionParams): Promise<void> {
    await this.sessionRepository.create(params)
  }

  async getAll(): Promise<HistorySession[]> {
    return this.historyRepository.findAll()
  }

  async getById(sessionId: string): Promise<HistorySession | null> {
    return this.historyRepository.findById(sessionId)
  }
}
