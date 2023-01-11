import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { styled, withExpoSnack } from "nativewind"
import { StyleSheet, Text, View } from "react-native"
import HomeScreen from "./screens/HomeScreen"


const Stack = createNativeStackNavigator()

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default withExpoSnack(App)
