import { View } from "react-native"

import { Typography } from "@components/ui/Typography"

import { QuestionResult } from "@contexts/QuestionsContext/types"

import { styles } from "./styles"

interface Props {
  item: QuestionResult
  index: number
}

export function ResultCard({ item, index }: Props) {
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
