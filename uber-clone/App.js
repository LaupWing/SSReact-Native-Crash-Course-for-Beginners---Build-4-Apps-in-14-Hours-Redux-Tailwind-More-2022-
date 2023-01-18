import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import Homescreen from "./screens/Homescreen"
import MapScreen from "./screens/MapScreen"
import { store } from "./store"


export default function App() {
   const Stack = createNativeStackNavigator()

   return (
      <Provider store={store}>
         <NavigationContainer>
            <SafeAreaProvider>
               <Stack.Navigator>
                  <Stack.Screen 
                     name="HomeScreen"
                     component={Homescreen}
                     options={{
                        headerShown: false
                     }}
                  />
                  <Stack.Screen 
                     name="MapScreen"
                     component={MapScreen}
                     options={{
                        headerShown: false,
                        animation: "slide_from_right"
                     }}
                  />
               </Stack.Navigator>
               {/* <Homescreen /> */}
            </SafeAreaProvider>
         </NavigationContainer>
      </Provider>
   )
}
