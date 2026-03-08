import { StyleSheet } from 'react-native'
import { colors, spacing, radius } from '@globals/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
    gap: spacing.lg,
  },

  header: {
    gap: spacing.xs,
  },

  subtext: {
    color: colors.textSecondary,
  },

  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fillFlex: {
    flex: 1,
  },

  emptyText: {
    color: colors.textSecondary,
    textAlign: 'center',
  },

  errorText: {
    color: colors.errorText,
    textAlign: 'center',
  },

  
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
    gap: spacing.sm,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  timeText: {
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  badge: {
    backgroundColor: colors.surfaceHigh,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },

  badgeText: {
    color: colors.primary,
  },

  
  progressBar: {
    height: 6,
    backgroundColor: colors.surfaceHigh,
    borderRadius: radius.full,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: radius.full,
  },

  percentText: {
    color: colors.textSecondary,
  },
})