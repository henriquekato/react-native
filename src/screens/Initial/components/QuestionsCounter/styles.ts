import { StyleSheet } from "react-native"

import { colors, spacing, radius } from "@globals/theme"

export const styles = StyleSheet.create({
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
  }
})
