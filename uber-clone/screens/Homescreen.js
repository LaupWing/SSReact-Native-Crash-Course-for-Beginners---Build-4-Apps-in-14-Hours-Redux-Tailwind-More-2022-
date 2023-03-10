import { View, Text, SafeAreaView, Image } from "react-native"
import React from "react"
import NavOptions from "../components/NavOptions"
import { GOOGLE_MAPS_APIKEY } from "@env"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { useDispatch } from "react-redux"
import { setDestination, setOrigin } from "../slices/navSlice"
import NavFavorites from "../components/NavFavorites"


const Homescreen = () => {
   const dispatch = useDispatch()

   return (
      <SafeAreaView className="bg-white h-full">
         <View className="p-5">
            <Image
               source={{
                  uri: "https://links.papareact.com/gzs"
               }}
               className="w-24 h-24"
               style={{
                  resizeMode: "contain"
               }}
            />

            <GooglePlacesAutocomplete
               styles={{
                  container:{
                     flex: 0
                  },
                  textInput: {
                     fontSize: 18
                  }
               }}
               query={{
                  key: GOOGLE_MAPS_APIKEY,
                  language: "en"
               }}
               minLength={2}
               enablePoweredByContainer={false}
               onPress={(data, details = null) => {
                  dispatch(setOrigin({
                     location: details.geometry.location,
                     description: data.description
                  }))

                  dispatch(setDestination(null))
               }}
               placeholder="Where From?"
               nearbyPlacesAPI="GooglePlacesSearch"
               debounce={400}
            />
            <NavOptions/>
            <NavFavorites/>
         </View>
      </SafeAreaView>
   )
}

export default Homescreen