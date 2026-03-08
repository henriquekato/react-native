import { View, FlatList, ActivityIndicator } from 'react-native'

import { Typography } from '@components/ui/Typography'
import { SafeAreaContainer } from '@components/layout/SafeAreaContainer'

import { HistorySession } from '@dtos/history'

import { useHistory } from './hooks/useHistory'

import { styles } from './styles'

export function History() {
  const { sessions, loading, refresh } = useHistory()

  function renderEmpty() {
    return (
      <View style={styles.centered}>
        <Typography variant="h5" style={styles.emptyText}>
          Nenhuma partida jogada ainda.
        </Typography>
      </View>
    )
  }



  function renderItem({ item }: { item: HistorySession }) {
    const date = item.playedAt.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })

    const time = item.playedAt.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })

    const percentage = Math.round((item.correct / item.total) * 100)

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Typography variant="h5">{date}</Typography>
            <Typography variant="b1" style={styles.timeText}>{time}</Typography>
          </View>

          <View style={styles.badge}>
            <Typography variant="h5" style={styles.badgeText}>
              {item.correct}/{item.total}
            </Typography>
          </View>
        </View>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${percentage}%` as any }]} />
        </View>

        <Typography variant="b1" style={styles.percentText}>
          {percentage}% de acerto
        </Typography>
      </View>
    )
  }

  if (loading) {
    return (
      <SafeAreaContainer>
        <View style={styles.centered}>
          <ActivityIndicator />
        </View>
      </SafeAreaContainer>
    )
  }

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Typography variant="h1">Histórico</Typography>
          <Typography variant="b1" style={styles.subtext}>
            {sessions.length} {sessions.length === 1 ? 'partida' : 'partidas'} jogadas
          </Typography>
        </View>

        
          <FlatList
            data={sessions}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ListEmptyComponent={renderEmpty}
            onRefresh={refresh}
            refreshing={loading}
            contentContainerStyle={sessions.length === 0 && styles.fillFlex}
          />
        
      </View>
    </SafeAreaContainer>
  )
}