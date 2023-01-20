import { StatusBar } from "expo-status-bar"
import { Button, Text, View } from "react-native"

export default function App() {
   return (
      <View className="flex-1 justify-center items-center">
         <Text>Open up App.js to start working on your app!</Text>
         <StatusBar style="auto" />
         <Button
            title="Click me"
         />
      </View>
   )
}