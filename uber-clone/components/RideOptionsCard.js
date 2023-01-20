import { useNavigation } from "@react-navigation/native"
import { Icon } from "@rneui/base"
import { useState } from "react"
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from "react-native"
import { useSelector } from "react-redux"
import { selectTravelTimeInformation } from "../slices/navSlice"

const RideOptionsCard = () => {
   const navigation = useNavigation()
   const [selected, setSelected] = useState(null)
   const travelTimeInformation = useSelector(selectTravelTimeInformation)

   return (
      <SafeAreaView className="bg-white flex-grow">
         <View className="relative">
            <TouchableOpacity 
               className="absolute left-5 top-3 p-3 rounded-full"
               onPress={() => navigation.navigate("NavigateCard")}
            >
               <Icon
                  name="chevron-left"
                  type="fontawesome"
               />
            </TouchableOpacity>
            <Text className="text-center py-5 text-xl">Select a ride - {travelTimeInformation?.distance.text}</Text>
         </View>

         <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
               <TouchableOpacity 
                  className={"flex-row items-center justify-between px-10 " + id === selected?.id && "bg-gray-200"}
                  onPress={() => setSelected(item)}
               >
                  <Image
                     style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                     }}
                     source={{uri: item.image}}
                  />
                  <View className="-ml-6">
                     <Text className="text-xl font-semibold">{item.title}</Text>
                     <Text className="">{travelTimeInformation?.duration.text} TravelTime</Text>
                  </View>
                  <Text className="text-xl">99</Text>
               </TouchableOpacity>
            )}
         />
         <View>
            <TouchableOpacity 
               className={"bg-black py-3 m-3 " + !selected && "bg-gray-300"}
               disabled={!selected}
            >
               <Text className="text-center text-white text-xl">Choose {selected?.title}</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}
export default RideOptionsCard
