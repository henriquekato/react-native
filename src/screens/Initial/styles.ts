import { StyleSheet } from "react-native"

import { colors, spacing, radius } from "@globals/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    gap: spacing.md
  },

  header: {
    alignItems: "center"
  },

  counterSection: {
    alignItems: "center",
    gap: spacing.md
  },

  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg
  },

  counterButton: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.surfaceHigh,
    borderWidth: 1,
    borderColor: colors.border
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
