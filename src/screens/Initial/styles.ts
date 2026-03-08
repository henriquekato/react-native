import { StyleSheet } from "react-native"

import { colors, spacing, radius } from "@globals/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    gap: spacing.md,
    padding: spacing.md
  },

  header: {
    alignItems: "center"
  },

  counterSection: {
    alignItems: "center",
    gap: spacing.md
  },

  content: {
    alignItems: "center",
    gap: spacing.lg
  },

  historyLink: {
    color: colors.primary,
    marginTop: spacing.xs,
    textDecorationLine: "underline"
  }
})
