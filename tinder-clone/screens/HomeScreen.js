import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import { View, Text, Button, SafeAreaView, TouchableOpacity, Image } from "react-native"
import useAuth from "../hooks/useAuth"
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons"
import Swiper from "react-native-deck-swiper"

const HomeScreen = () => {
   const navigation = useNavigation()
   const { user, logout } = useAuth()

   return (
      <SafeAreaView className="flex-1">
         <View className="items-center relative">
            <TouchableOpacity 
               className="absolute left-5 top-3"
               onPress={logout}
            >
               <Image
                  source={{
                     uri: user.photoURL
                  }}
                  className="h-10 w-10 rounded-full"
               />
            </TouchableOpacity>
            <TouchableOpacity>
               <Image 
                  source={require("../logo.png")}
                  className="h-14 w-14"
               />
            </TouchableOpacity>
            <TouchableOpacity 
               className="absolute right-5 top-3"
               onPress={() => navigation.navigate("Chat")}
            >
               <Ionicons
                  name="chatbubbles-sharp"
                  size={30}
                  color="#FF5864"
               />
            </TouchableOpacity>
         </View>
         <View className="flex-1 -mt-6">
            <Swiper 
               containerStyle={{
                  backgroundColor: "transparent"

               }}
               cards={[]}
               stackSize={5}
               cardIndex={0}
               verticalSwipe={false}
               animateCardOpacity
               renderCard={card => (
                  <View 
                     className="bg-white h-3/4 rounded-xl relative"
                     key={card.id}
                  >
                     <Image
                        className="h-full w-full rounded-xl absolute inset-0"
                        source={{
                           uri: card.photoURL
                        }}   
                     />
                     <View>
                        <View>
                           <Text>{card.firstName} {card.lastName}</Text>
                           <Text>{card.job}</Text>
                        </View>
                     </View>
                  </View>
               )}
            />
         </View>
      </SafeAreaView>
   )
}
export default HomeScreen