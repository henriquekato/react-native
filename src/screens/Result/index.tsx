import { View, FlatList } from "react-native"
import { useRouter } from "expo-router"

import { Button } from "@components/ui/Button"
import { Typography } from "@components/ui/Typography"
import { SafeAreaContainer } from "@components/layout/SafeAreaContainer"
import { KeyboardAvoidingContainer } from "@components/layout/KeyboardAvoidingView"

import { useQuestions } from "@contexts/QuestionsContext"

import { QuestionResult } from "@contexts/types"

import { styles } from "./styles"

export function Result() {
  const { replace } = useRouter()
  const { results } = useQuestions()

  const totalCorrect = results.filter((r) => r.isCorrect).length

  function handleBackPress() {
    replace("/")
  }

  function renderItem({
    item,
    index
  }: {
    item: QuestionResult
    index: number
  }) {
    return (
      <View
        style={[
          styles.resultItem,
          item.isCorrect ? styles.correct : styles.incorrect
        ]}
      >
        <Typography variant='h5'>
          {index + 1}. {item.question.title}
        </Typography>

        <Typography variant='b1'>Sua resposta: {item.answer || "—"}</Typography>

        {!item.isCorrect && (
          <Typography variant='b1'>
            Resposta correta: {item.correctAnswer}
          </Typography>
        )}
      </View>
    )
  }

  return (
    <SafeAreaContainer>
      <KeyboardAvoidingContainer>
        <View style={styles.container}>
          <View style={styles.header}>
            <Typography variant='h1'>Resultado</Typography>
            <Typography variant='h5'>
              {totalCorrect} de {results.length} corretas
            </Typography>
          </View>

          <FlatList
            data={results}
            keyExtractor={(item) => item.question.id}
            renderItem={renderItem}
            style={styles.results}
          />

          <View style={styles.footer}>
            <Button title='Voltar' onPress={handleBackPress} />
          </View>
        </View>
      </KeyboardAvoidingContainer>
    </SafeAreaContainer>
  )
}
