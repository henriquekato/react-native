import { dbService } from '@services/database'

import { INSERT_SESSION } from './sql'

export class SessionRepository {
  private get db() {
    return dbService.connect()
  }

  async create(id: string): Promise<void> {
    await this.db.runAsync(INSERT_SESSION, { $id: id, $playedAt: Date.now() })
  }
}