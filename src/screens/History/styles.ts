import { StyleSheet } from "react-native"
import { colors, spacing } from "@globals/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
    gap: spacing.lg
  },

  header: {
    gap: spacing.xs
  },

  subtext: {
    color: colors.textSecondary
  },

  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  fillFlex: {
    flex: 1
  },

  emptyText: {
    color: colors.textSecondary,
    textAlign: "center"
  },

  errorText: {
    color: colors.errorText,
    textAlign: "center"
  }
})
