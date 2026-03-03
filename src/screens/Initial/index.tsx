import { View } from "react-native"
import { useRouter } from "expo-router"

import { Button } from "@components/ui/Button"
import { Typography } from "@components/ui/Typography"
import { SafeAreaContainer } from "@components/layout/SafeAreaContainer"
import { KeyboardAvoidingContainer } from "@components/layout/KeyboardAvoidingView"

export function Initial() {
  const { push } = useRouter()

  function handleInitPress() {
    push("/question")
  }

  return (
    <SafeAreaContainer>
      <KeyboardAvoidingContainer>
        <View style={styles.header}>
          <Typography variant='h1'>Perguntas e Respostas</Typography>
        </View>

        <View styles={styles.content}>
          <Typography variant='h5'>
            Responda 5 perguntas e veja seu resultado
          </Typography>

          <Button title='Começar' onPress={handleInitPress} />
        </View>
      </KeyboardAvoidingContainer>
    </SafeAreaContainer>
  )
}
