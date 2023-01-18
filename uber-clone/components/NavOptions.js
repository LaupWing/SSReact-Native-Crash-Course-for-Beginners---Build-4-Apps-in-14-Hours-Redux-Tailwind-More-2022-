import { View, Text, FlatList, TouchableOpacity, Image } from "react-native"
import React from "react"
import { Icon } from "@rneui/base"
import { useNavigation } from "@react-navigation/native"

const data = [
   {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen"
   },
   {
      id: "456",
      title: "Order food",
      image: "https://links.papareact.com/28w",
      screen: "EatScreen"
   },
]

const NavOptions = () => {
   const navigation = useNavigation()

   return (
      <FlatList
         data={data}
         horizontal
         scrollEnabled={false}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => (
            <TouchableOpacity 
               className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
               onPress={() => navigation.navigate(item.screen)}
            >
               <View>
                  <Image
                     source={{
                        uri: item.image
                     }}
                     className="w-32 h-32"
                     resizeMode="contain"
                  />
                  <Text className="mt-2 text-lg font-semibold">
                     {item.title}
                  </Text>
                  <Icon
                     className="p-2 bg-black rounded-full w-10"
                     type="antdesign"
                     name="arrowright"
                     color={"white"}
                  />
               </View>
            </TouchableOpacity>
         )}
      />
   )
}

export default NavOptions
