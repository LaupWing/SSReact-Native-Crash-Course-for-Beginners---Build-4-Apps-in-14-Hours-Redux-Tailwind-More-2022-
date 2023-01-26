import { Avatar } from "@rneui/base"
import { useLayoutEffect } from "react"
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import CustomListItem from "../components/CustomListItem"
import { auth } from "../firebase"

const HomeScreen = ({ navigation }) => {

   useLayoutEffect(() => {
      navigation.setOptions({
         title: "signal",
         headerStyle: {
            backgroundColor: "white",
            headerTitleStyle: {
               color: "black"
            },
            headerTintColor: "black",
            headerLeft: () => (
               <View className="ml-20">
                  <TouchableOpacity> 
                     <Avatar
                        rounded
                        source={{
                           uri: auth?.currentUser?.photoURL
                        }}
                     />
                  </TouchableOpacity>
               </View>
            )
         }
      })
   }, [])

   return (
      <SafeAreaView>
         <ScrollView>
            <CustomListItem />
         </ScrollView>
      </SafeAreaView>
   )
}
export default HomeScreen
