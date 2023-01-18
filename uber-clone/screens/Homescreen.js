import { View, Text, SafeAreaView, Image } from "react-native"
import React from "react"

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
         </View>
         <Text className="text-red-400 p-10">Test</Text>
      </SafeAreaView>
   )
}

export default Homescreen