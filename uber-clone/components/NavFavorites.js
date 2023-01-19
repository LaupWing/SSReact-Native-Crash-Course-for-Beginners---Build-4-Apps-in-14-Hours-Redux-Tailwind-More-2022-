import { Icon } from "@rneui/base"
import { FlatList, TouchableOpacity } from "react-native"
import { View, Text } from "react-native"

const NavFavorites = () => {
   return (
      <FlatList
         data={[]}
         keyExtractor={item => item.id}
         ItemSeparatorComponent={() => (
            <View
               className="bg-gray-200 h-[2px]"
            />
         )}
         renderItem={({ item: { location, destination, icon} }) => (
            <TouchableOpacity className="flex-row items-center p-5">
               <Icon
                  className="mr-4 rounded-full bg-gray-300 p-3"
                  name={icon}
                  type="ionicon"
                  color={"white"}
                  size={18}
               />
               <View>
                  <Text className="font-semibold text-lg">{location}</Text>
                  <Text className="text-gray-500">{destination}</Text>
               </View>
            </TouchableOpacity>
         )}
      />
   )
}
export default NavFavorites
