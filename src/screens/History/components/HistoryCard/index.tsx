import { View } from "react-native"

import { Typography } from "@components/ui/Typography"

import { HistorySession } from "@dtos/history"

import { styles } from "./styles"

interface Props {
  item: HistorySession
}

export function HistoryCard({ item }: Props) {
  const date = item.playedAt.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  })

  const time = item.playedAt.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  })

  const percentage = Math.round((item.correct / item.total) * 100)

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View>
          <Typography variant='h5'>{date}</Typography>

          <Typography variant='b1' style={styles.timeText}>
            {time}
          </Typography>
        </View>

        <View style={styles.badge}>
          <Typography variant='h5' style={styles.badgeText}>
            {item.correct}/{item.total}
          </Typography>
        </View>
      </View>

      <View style={styles.progressBar}>
        <View
          style={[styles.progressFill, { width: `${percentage}%` as any }]}
        />
      </View>

      <Typography variant='b1' style={styles.percentText}>
        {percentage}% de acerto
      </Typography>
    </View>
  )
}
