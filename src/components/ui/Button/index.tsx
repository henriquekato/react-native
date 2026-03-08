import React from "react"
import { Pressable, GestureResponderEvent } from "react-native"

import { Typography } from "../Typography"

import { styles } from "./styles"

interface ButtonProps {
  title: string
  disabled?: boolean
  onPress: (event: GestureResponderEvent) => void
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Typography variant='b1' style={styles.text}>
        {title}
      </Typography>
    </Pressable>
  )
}
