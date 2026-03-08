import { StyleSheet } from "react-native"
import { colors, spacing, radius } from "@globals/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md
  },

  header: {
    gap: spacing.xs
  },

  results: {
    flex: 1
  },

  footer: {
    paddingBottom: spacing.sm
  }
})
