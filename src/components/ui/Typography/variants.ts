import { TypographyConfig, TypographyVariant } from "./types"

export const TypographyConfigs: Record<TypographyVariant, TypographyConfig> = {
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "bold"
  },

  h2: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "bold"
  },

  h3: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "semibold"
  },

  h4: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "semibold"
  },

  h5: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "semibold"
  },

  b1: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "regular"
  },

  b2: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "regular"
  },

  b3: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "regular"
  }
}
