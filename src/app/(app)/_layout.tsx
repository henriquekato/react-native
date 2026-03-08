import { Stack } from "expo-router"
import { QuestionsContextProvider } from "@contexts/QuestionsContext"

export default function Layout() {
  return (
    <QuestionsContextProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </QuestionsContextProvider>
  )
}
