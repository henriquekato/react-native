import { Image, Pressable, View } from "react-native"
import { useRouter } from "expo-router"

import { Button } from "@components/ui/Button"
import { Typography } from "@components/ui/Typography"
import { QuestionsCounter } from "./components/QuestionsCounter"
import { SafeAreaContainer } from "@components/layout/SafeAreaContainer"
import { KeyboardAvoidingContainer } from "@components/layout/KeyboardAvoidingView"

import { useQuestions } from "@contexts/QuestionsContext"

import { styles } from "./styles"

export function Initial() {
  const image = require("@assets/initial-image.jpg")

  const { push } = useRouter()

  const { totalQuestions, increaseQuestionCount, decreaseQuestionCount } =
    useQuestions()

  function handleInitPress() {
    push("/question")
  }

  return (
    <SafeAreaContainer>
      <KeyboardAvoidingContainer>
        <View style={styles.container}>
          <View style={styles.header}>
            <Typography variant='h1'>Perguntas e Respostas</Typography>

            <Pressable hitSlop={32} onPress={() => push("/history")}>
              <Typography variant='b1' style={styles.historyLink}>
                Ver histórico
              </Typography>
            </Pressable>
          </View>

          <Image style={styles.image} source={image} />

          <View style={styles.counterSection}>
            <Typography variant='h4'>
              Quantas perguntas deseja responder?
            </Typography>

            <Typography variant='h5'>Entre 1 a 5 perguntas</Typography>

            <QuestionsCounter
              total={totalQuestions}
              decrease={decreaseQuestionCount}
              increase={increaseQuestionCount}
            />
          </View>

          <View style={styles.content}>
            <Typography variant='h5'>
              {`Responda ${totalQuestions} ${totalQuestions > 1 ? "perguntas" : "pergunta"} e veja seu resultado`}
            </Typography>

            <Button title='Começar' onPress={handleInitPress} />
          </View>
        </View>
      </KeyboardAvoidingContainer>
    </SafeAreaContainer>
  )
}
