import { useNavigation } from "@react-navigation/native"
import { Text, SafeAreaView } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { useDispatch } from "react-redux"
import { setDestination } from "../slices/navSlice"

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
         </View>
      </SafeAreaView>
   )
}
export default NavigateCard
