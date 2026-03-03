import { View } from "react-native"
import { useRouter } from "expo-router"

import { Button } from "@components/ui/Button"
import { Typography } from "@components/ui/Typography"
import { SafeAreaContainer } from "@components/layout/SafeAreaContainer"
import { KeyboardAvoidingContainer } from "@components/layout/KeyboardAvoidingView"

import { useQuestions } from "@contexts/QuestionsContext"

export function Result() {
  const { replace } = useRouter()
  const { questions } = useQuestions()

  function handleBackPress() {
    replace("/")
  }

  function renderResults() {
    return null
  }

  return (
    <SafeAreaContainer>
      <KeyboardAvoidingContainer>
        <View style={styles.container}>
          <View style={styles.header}>
            <Typography variant='h1'>Resultado</Typography>
          </View>

          <View style={styles.results}>{renderResults()}</View>

          <View style={styles.footer}>
            <Button title='Voltar' onPress={handleBackPress} />
          </View>
        </View>
      </KeyboardAvoidingContainer>
    </SafeAreaContainer>
  )
}
