import { StatusBar } from "expo-status-bar"
import { styled, withExpoSnack } from "nativewind"
import { StyleSheet, Text, View } from "react-native"

const StylesView = styled(View)

const App = () => {
   return (
      <StylesView className="bg-blue-500">
         <Text>Open up App.js to start working on your app!</Text>
         <StatusBar style="auto" />
      </StylesView>
   )
}

export default withExpoSnack(App)
