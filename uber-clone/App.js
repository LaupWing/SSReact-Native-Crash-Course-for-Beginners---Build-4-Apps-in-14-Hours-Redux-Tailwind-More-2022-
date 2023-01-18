import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import Homescreen from "./screens/Homescreen"
import { store } from "./store"

export default function App() {
   return (
      <Provider store={store}>
         <NavigationContainer>
            <SafeAreaProvider>
               <Homescreen />
            </SafeAreaProvider>
         </NavigationContainer>
      </Provider>
   )
}
