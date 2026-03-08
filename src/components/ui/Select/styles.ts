import { StyleSheet } from "react-native"
import { colors, radius, spacing } from "@globals/theme"

export const styles = StyleSheet.create({
  container: {
    gap: spacing.sm
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface
  },

  optionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.surfaceHigh
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: radius.full,
    borderWidth: 2,
    borderColor: colors.textDisabled,
    alignItems: "center",
    justifyContent: "center"
  },

  radioSelected: {
    borderColor: colors.primary
  },

  radioDot: {
    width: 10,
    height: 10,
    borderRadius: radius.full,
    backgroundColor: colors.primary
  },

  label: {
    color: colors.textSecondary
  },

  labelSelected: {
    color: colors.textPrimary
  }
})
