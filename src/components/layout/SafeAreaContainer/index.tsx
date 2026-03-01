import React, { PropsWithChildren } from "react"
import { Edge, SafeAreaView } from "react-native-safe-area-context"

const ALL_EDGES: Edge[] = ["top", "right", "bottom", "left"]
const WITH_NAVBAR_EDGES: Edge[] = ["top", "right", "left"]

interface Props extends PropsWithChildren {
  hasNavBar?: boolean
}

export function SafeAreaContainer({ children, hasNavBar }: Props) {
  const edges = hasNavBar ? WITH_NAVBAR_EDGES : ALL_EDGES

  return (
    <SafeAreaView edges={edges} style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  )
}
