import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { styled, withExpoSnack } from "nativewind"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import { Provider } from "react-redux"
import HomeScreen from "./screens/HomeScreen"
import RestaurantScreen from "./screens/RestaurantScreen"
import { store } from "./store"


const Stack = createNativeStackNavigator()

const App = () => {
   return (
      <NavigationContainer>
         <Provider store={store}>
            <StatusBar/>
            <Stack.Navigator>
               <Stack.Screen name="Home" component={HomeScreen}/>
               <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
            </Stack.Navigator>
         </Provider>
      </NavigationContainer>
   )
}

export default withExpoSnack(App)
