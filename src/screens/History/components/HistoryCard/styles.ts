import { StyleSheet } from "react-native"
import { colors, spacing, radius } from "@globals/theme"

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
    gap: spacing.sm
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  timeText: {
    color: colors.textSecondary,
    marginTop: spacing.xs
  },

  badge: {
    backgroundColor: colors.surfaceHigh,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs
  },

  badgeText: {
    color: colors.primary
  },

  progressBar: {
    height: 6,
    backgroundColor: colors.surfaceHigh,
    borderRadius: radius.full,
    overflow: "hidden"
  },

  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: radius.full
  },

  percentText: {
    color: colors.textSecondary
  }
})
