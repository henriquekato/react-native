import { StyleSheet } from "react-native"
import { colors, spacing, radius } from "@globals/theme"

export const styles = StyleSheet.create({
  button: {
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.sm
  },

  pressed: {
    backgroundColor: colors.primaryDark
  },

  text: {
    color: colors.textPrimary,
    fontWeight: "600"
  },

  disabled: {
    backgroundColor: colors.primary,
    opacity: 0.5
  }
})
