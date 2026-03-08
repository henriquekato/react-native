import { View, TouchableOpacity, StyleSheet, Pressable } from "react-native"

import { Typography } from "@components/ui/Typography"

import { QuestionOption } from "@dtos/question"

import { styles } from "./styles"

interface SelectProps {
  value: string
  options: QuestionOption[]
  onChange: (value: string) => void
}

export function Select({ value, options, onChange }: SelectProps) {
  return (
    <View style={styles.container}>
      {options.map((option) => {
        const isSelected = option.value === value

        return (
          <Pressable
            key={option.id}
            onPress={() => onChange(option.value)}
            style={[styles.option, isSelected && styles.optionSelected]}
          >
            <View style={[styles.radio, isSelected && styles.radioSelected]}>
              {isSelected && <View style={styles.radioDot} />}
            </View>

            <Typography
              variant='b1'
              style={isSelected ? styles.labelSelected : styles.label}
            >
              {option.label}
            </Typography>
          </Pressable>
        )
      })}
    </View>
  )
}
