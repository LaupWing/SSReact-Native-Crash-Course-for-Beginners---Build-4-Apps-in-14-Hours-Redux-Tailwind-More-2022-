import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import Map from "../components/Map"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NavigateCard from "../components/NavigateCard"
import RideOptionsCard from "../components/RideOptionsCard"
import NavFavorites from "../components/NavFavorites"
import { Icon } from "@rneui/base"
import { useNavigation } from "@react-navigation/native"

const MapScreen = () => {
   const Stack = createNativeStackNavigator()
   const navigation = useNavigation()

   return (
      <View>
         <TouchableOpacity 
            onPress={() => navigation.navigate("HomeScreen")}
            className="absolute top-16 left-8 bg-gray-100 z-50 p-3 rounded-full shadow-lg"
         >
            <Icon name="menu"/>
         </TouchableOpacity>
         <Text>MapScreen</Text>
         <View className="h-1/2">
            <Map />
         </View>
         <View className="h-1/2">
            <Stack.Navigator>
               <Stack.Screen
                  name="NavigateCard"
                  component={NavigateCard}
                  options={{
                     headerShown: false
                  }}
               />
               <Stack.Screen
                  name="RideOptionsCard"
                  component={RideOptionsCard}
                  options={{
                     headerShown: false
                  }}
               />
            </Stack.Navigator>
            <NavFavorites/>
         </View>
      </View>
   )
}

export default MapScreen