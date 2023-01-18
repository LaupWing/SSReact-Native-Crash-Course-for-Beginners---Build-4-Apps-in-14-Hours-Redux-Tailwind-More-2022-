import { View, Text, SafeAreaView, Image } from "react-native"
import React from "react"

const Homescreen = () => {
   return (
      <SafeAreaView className="bg-white h-full">
         <View className="p-5">
            <Image
               source={{
                  uri: "https://links.papareact/gzs"
               }}
               className="w-full h-full object-contain"
            />
         </View>
         <Text className="text-red-400 p-10">Homescreen</Text>
      </SafeAreaView>
   )
}

export default Homescreen