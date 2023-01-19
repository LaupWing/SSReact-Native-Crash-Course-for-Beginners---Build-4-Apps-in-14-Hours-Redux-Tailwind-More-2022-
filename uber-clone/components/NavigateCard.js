import { Text, SafeAreaView } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"

const NavigateCard = () => {
   return (
      <SafeAreaView className="bg-white flex-1">
         <Text className="text-center py-5 text-xl">Good Morning, Sonny</Text>
         <View className="border-t border-gray-200 flex-shrink">
            <View className="">
               <GooglePlacesAutocomplete
                  placeholder="Where to?"
                  debounce={400}
                  nearbyPlacesAPI="GooglePlacesSearch"
               />
            </View>
         </View>
      </SafeAreaView>
   )
}
export default NavigateCard
