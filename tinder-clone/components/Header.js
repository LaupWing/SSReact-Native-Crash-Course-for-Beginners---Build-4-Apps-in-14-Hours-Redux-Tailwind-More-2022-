import { View, Text, TouchableOpacity } from "react-native"
import { Foundation } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const Header = ({ title, callEnabled}) => {
   const navigation = useNavigation()

   return (
      <View className="flex-row p-2 items-center justify-between">
         <View className="flex flex-row items-center">
            <TouchableOpacity
               className="p-2"
               onPress={() => navigation.goBack()}
            >
               <Ionicons 
                  name="chevron-back-outline"
                  size={34}
                  color="#FF584"
               />
               <Text className="text-2xl font-bold pl-2">{title}</Text>
            </TouchableOpacity>
         </View>
         {callEnabled && (
            <TouchableOpacity className="rounded-full mr-4 p-3 bg-red-200">
               <Foundation
                  className=""
                  name="telephone"
                  size={20}
                  color="red"
               />
            </TouchableOpacity>
         )}
      </View>
   )
}
export default Header
