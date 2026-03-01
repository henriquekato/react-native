import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  button: {
    height: 48,
    backgroundColor: "#6200EE",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },

  pressed: {
    opacity: 0.7
  },

  text: {
    color: "#FFF",
    fontWeight: "600"
  },

  disabled: {
    backgroundColor: "#BDBDBD"
  }
})
