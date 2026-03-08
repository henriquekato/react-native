import { Pressable, View } from "react-native"

import { Typography } from "@components/ui/Typography"
import { styles } from "./styles"

interface Props {
  total: number
  decrease: () => void
  increase: () => void
}

export function QuestionsCounter({ total, decrease, increase }: Props) {
  return (
    <View style={styles.counter}>
      <Pressable style={styles.counterButton} onPress={decrease}>
        <Typography variant='h4'>-</Typography>
      </Pressable>

      <Typography variant='h3'>{total}</Typography>

      <Pressable style={styles.counterButton} onPress={increase}>
        <Typography variant='h4'>+</Typography>
      </Pressable>
    </View>
  )
}
