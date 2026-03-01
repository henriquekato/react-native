import React from "react"
import { View, TextInput, TextInputProps } from "react-native"

import { Typography } from "../Typography"

import { styles } from "./styles"

interface InputProps extends TextInputProps {
  label?: string
}

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <View style={styles.container}>
      {label && (
        <Typography variant='b2' style={styles.label}>
          {label}
        </Typography>
      )}

      <TextInput {...rest} style={[styles.input]} placeholderTextColor='#999' />
    </View>
  )
}
