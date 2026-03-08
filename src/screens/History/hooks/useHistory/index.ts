import { useRouter } from "expo-router"
import { useEffect, useState } from "react"

import { HistoryService } from "@services/history"

import { HistorySession } from "@dtos/history"

const historyService = new HistoryService()

export function useHistory() {
  const [sessions, setSessions] = useState<HistorySession[]>([])
  const [loading, setLoading] = useState(true)

  const { back } = useRouter()

  useEffect(() => {
    fetchHistory()
  }, [])

  async function fetchHistory() {
    try {
      setLoading(true)
      const data = await historyService.getAll()
      setSessions(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  function handleBackPress() {
    back()
  }

  return { sessions, loading, refresh: fetchHistory, handleBackPress }
}
