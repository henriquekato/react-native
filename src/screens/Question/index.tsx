import { View } from "react-native"
import { useEffect } from "react"

import { Input } from "@components/ui/Input"
import { Select } from "@components/ui/Select"
import { Button } from "@components/ui/Button"
import { Typography } from "@components/ui/Typography"
import { SafeAreaContainer } from "@components/layout/SafeAreaContainer"
import { KeyboardAvoidingContainer } from "@components/layout/KeyboardAvoidingView"

import { useQuestions } from "@contexts/QuestionsContext"

import { styles } from "./styles"

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

  const currentQuestion = questions[currentQuestionIndex]?.question

  function renderAnswerInput() {
    if (!currentQuestion) return null

    if (currentQuestion.type === "select") {
      return (
        <Select
          value={answer}
          options={currentQuestion.options ?? []}
          onChange={handleAnswerChange}
        />
      )
    }

    return <Input value={answer} onChangeText={handleAnswerChange} />
  }

  return (
    <SafeAreaContainer>
      <KeyboardAvoidingContainer>
        <View style={styles.container}>
          <View style={styles.header}>
            <Typography variant='h1'>
              Pergunta {currentQuestionIndex + 1}
            </Typography>

            <Typography variant='h5'>{currentQuestion?.title}</Typography>
          </View>

          <View style={styles.question}>
            {renderAnswerInput()}

            <Button
              title='Responder'
              onPress={handleAnswerPress}
              disabled={!answer}
            />
          </View>
        </View>
      </KeyboardAvoidingContainer>
    </SafeAreaContainer>
  )
}
