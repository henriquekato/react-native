import { PropsWithChildren } from "react"
import { KeyboardAvoidingView, Platform } from "react-native"

interface Props extends PropsWithChildren {
  verticalOffset?: number
}

export function KeyboardAvoidingContainer({ children, verticalOffset }: Props) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={verticalOffset}
    >
      {children}
    </KeyboardAvoidingView>
  )
}
