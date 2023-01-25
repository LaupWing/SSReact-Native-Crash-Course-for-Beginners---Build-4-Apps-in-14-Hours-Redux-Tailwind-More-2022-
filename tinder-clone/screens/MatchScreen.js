import { useNavigation, useRoute } from "@react-navigation/native"
import { View, Text, Image, TouchableOpacity } from "react-native"

const MatchScreen = () => {
   const navigation = useNavigation()
   const { params} = useRoute()
   const {loggedInProfile, userSwiped} = params

   return (
      <View className="h-4 bg-red-500 pt-20 opacity-90">
         <View className="justify-center px-10 pt-20">
            <Image
               source={{
                  uri: ""
               }}
            />
         </View>
         <Text className="text-white text-center mt-5">
            You and {userSwiped.displayName} has liked each other.
         </Text>

         <View className="flex-row justify-evenly mt-5">
            <Image
               source={{
                  uri: ""
               }}
            />
            <Image
               source={{
                  uri: ""
               }}
            />
         </View>

         <TouchableOpacity
            className="bg-white m-5 px-10 py-8 rounded-full mt-20"
            onPress={() => {
               
            }}
         >
            <Text>Send a message</Text>
         </TouchableOpacity>
      </View>
   )
}
export default MatchScreen
