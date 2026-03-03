import { View } from "react-native"
import { useEffect } from "react"

import { Input } from "@components/ui/Input"
import { Button } from "@components/ui/Button"
import { Typography } from "@components/ui/Typography"
import { SafeAreaContainer } from "@components/layout/SafeAreaContainer"
import { KeyboardAvoidingContainer } from "@components/layout/KeyboardAvoidingView"

import { useQuestions } from "@contexts/QuestionsContext"

export function Question() {
  const {
    answer,
    questions,
    loadQuestions,
    currentQuestionIndex,
    handleAnswerPress,
    handleAnswerChange
  } = useQuestions()

  useEffect(() => {
    loadQuestions()
  }, [])

  return (
    <SafeAreaContainer>
      <KeyboardAvoidingContainer>
        <View style={styles.container}>
          <View style={styles.header}>
            <Typography variant='h1'>
              Pergunta {currentQuestionIndex + 1}
            </Typography>

            <Typography variant='h5'>
              {questions[currentQuestionIndex]?.question.title}
            </Typography>
          </View>

          <View style={styles.question}>
            <Input value={answer} onChangeText={handleAnswerChange} />

            <Button title='Responder' onPress={handleAnswerPress} />
          </View>
        </View>
      </KeyboardAvoidingContainer>
    </SafeAreaContainer>
  )
}
