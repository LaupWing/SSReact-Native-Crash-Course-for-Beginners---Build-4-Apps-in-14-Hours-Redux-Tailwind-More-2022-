import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import LoginScreen from "./screens/LoginScreen"

const Stack = createNativeStackNavigator()

const globlScreenOptions = {
   headerStyle: {
      backgroundColor: "blue"
   },
   headerTitleStyle: {
      color: "white"
   },
   headerTintColor: "white"
}

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={globlScreenOptions}>
            <Stack.Screen 
               name="Login" 
               component={LoginScreen}
            />
         </Stack.Navigator>
         <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
         </View>
      </NavigationContainer>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
})
