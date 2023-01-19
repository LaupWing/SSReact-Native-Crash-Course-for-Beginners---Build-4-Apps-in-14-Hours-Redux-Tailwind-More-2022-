import { useNavigation } from "@react-navigation/native"
import { Icon } from "@rneui/base"
import { Text, SafeAreaView, TouchableOpacity } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { useDispatch } from "react-redux"
import { setDestination } from "../slices/navSlice"
import NavFavorites from "./NavFavorites"

const NavigateCard = () => {
   const dispatch = useDispatch()
   const navigation = useNavigation()

   return (
      <SafeAreaView className="bg-white flex-1">
         <Text className="text-center py-5 text-xl">Good Morning, Sonny</Text>
         <View className="border-t border-gray-200 flex-shrink">
            <View className="">
               <GooglePlacesAutocomplete
                  placeholder="Where to?"
                  debounce={400}
                  onPress={(data, details = null) => {
                     dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description
                     }))
                     navigation.navigate("RideOptionsCard")
                  }}
                  nearbyPlacesAPI="GooglePlacesSearch"
                  className="bg-white pt-5 flex-0"
                  enablePoweredByContainer={false}
                  query={{
                     key: "",
                     language: "en"
                  }}
               />
            </View>
            <NavFavorites/>
         </View>
         <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
            <TouchableOpacity 
               onPress={() => navigation.navigate("RideOptionsCard")}
               className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
            >
               <Icon name="car" type="font-awesome" color={"white"} size={16}/>
               <Text className="text-white text-center">Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full">
               <Icon name="car" type="font-awesome" color={"black"} size={16}/>
               <Text className="text-white text-center">Rides</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}
export default NavigateCard
