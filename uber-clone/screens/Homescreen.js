import { View, Text, SafeAreaView, Image } from "react-native"
import React from "react"
import NavOptions from "../components/NavOptions"

const Homescreen = () => {
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
            <NavOptions/>
         </View>
      </SafeAreaView>
   )
}

export default Homescreen