import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { styled, withExpoSnack } from "nativewind"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import HomeScreen from "./screens/HomeScreen"


const Stack = createNativeStackNavigator()

const App = () => {
   return (
      <NavigationContainer>
         <StatusBar/>
         <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default withExpoSnack(App)
