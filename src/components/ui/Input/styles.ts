import { StyleSheet } from "react-native"
import { colors, spacing, radius, fontSize } from "@globals/theme"

export const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md
  },

  label: {
    marginBottom: spacing.xs,
    color: colors.textSecondary
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.b1,
    backgroundColor: colors.surface,
    color: colors.textPrimary
  }
})
