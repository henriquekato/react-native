export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "b1"
  | "b2"
  | "b3"

export type TypographyConfig = {
  fontSize: number
  lineHeight: number
  fontWeight: "regular" | "semibold" | "bold"
}
