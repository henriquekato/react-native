import { useEffect, useState } from "react"
import { Slot, SplashScreen } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import { dbService } from '@services/database'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [dbReady, setDbReady] = useState(false)

  useEffect(() => {
    dbService.initialize()
      .then(() => setDbReady(true))
      .catch(console.error)
  }, [])

  useEffect(() => {
    if (dbReady) {
      SplashScreen.hideAsync()
    }
  }, [dbReady])

  if (!dbReady) return null

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  )
}