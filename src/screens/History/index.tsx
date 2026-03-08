import {
  View,
  FlatList,
  ActivityIndicator,
  ListRenderItemInfo
} from "react-native"

import { Button } from "@components/ui/Button"
import { Typography } from "@components/ui/Typography"
import { HistoryCard } from "./components/HistoryCard"
import { SafeAreaContainer } from "@components/layout/SafeAreaContainer"

import { HistorySession } from "@dtos/history"

import { useHistory } from "./hooks/useHistory"

import { styles } from "./styles"

export function History() {
  const { sessions, loading, refresh, handleBackPress } = useHistory()

  function renderEmpty() {
    return (
      <View style={styles.centered}>
        <Typography variant='h5' style={styles.emptyText}>
          Nenhuma partida jogada ainda.
        </Typography>
      </View>
    )
  }

  function renderItem({ item }: ListRenderItemInfo<HistorySession>) {
    return <HistoryCard item={item} />
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
          <Typography variant='h1'>Histórico</Typography>

          <Typography variant='b1' style={styles.subtext}>
            {sessions.length} {sessions.length === 1 ? "partida" : "partidas"}{" "}
            jogadas
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

        <View style={styles.footer}>
          <Button title='Voltar' onPress={handleBackPress} />
        </View>
      </View>
    </SafeAreaContainer>
  )
}
