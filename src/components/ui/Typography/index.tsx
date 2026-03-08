import React from "react"
import { Text, TextProps, StyleSheet } from "react-native"

import { TypographyConfigs } from "./variants"

import { TypographyVariant } from "./types"

interface TypographyProps extends TextProps {
  variant?: TypographyVariant
  color?: string
}

export function Typography({
  variant = "b1",
  color = "#000",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Text
      {...rest}
      style={[styles.base, TypographyConfigs[variant], { color }]}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false
  }
})
