import { StyleSheet } from "react-native"
import { colors, spacing, radius } from "@globals/theme"

export const styles = StyleSheet.create({
  resultItem: {
    gap: spacing.xs,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    marginBottom: spacing.sm
  },

  correct: {
    backgroundColor: colors.success,
    borderColor: colors.successBorder
  },

  incorrect: {
    backgroundColor: colors.error,
    borderColor: colors.errorBorder
  }
})
