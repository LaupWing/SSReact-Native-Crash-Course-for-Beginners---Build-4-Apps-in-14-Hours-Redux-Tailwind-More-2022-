import { Avatar } from "@rneui/base"
import { useEffect, useLayoutEffect, useState } from "react"
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import CustomListItem from "../components/CustomListItem"
import { auth } from "../firebase"
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"

const HomeScreen = ({ navigation }) => {
   const [chats, setChats] = useState([])
   const signOutUser = () => {
      auth.signOut().then(() => {
         navigation.replace("Login")
      })
   }

   useEffect(() => {
      const unsubscribe = db.collection("chats").onSnapshot(snapshot => {
         setChats(snapshot.docs.map(doc =>({
            id: doc.id,
            ...doc.data()
         })))
      })

      return unsubscribe
   }, [])

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
                  <TouchableOpacity 
                     activeOpacity={0.5}
                     onPress={signOutUser}
                  > 
                     <Avatar
                        rounded
                        source={{
                           uri: auth?.currentUser?.photoURL
                        }}
                     />
                  </TouchableOpacity>
               </View>
            ),
            headerRight: () => (
               <View className="flex-row justify-between w-20 mr-4">
                  <TouchableOpacity activeOpacity={0.5}>
                     <AntDesign 
                        name="camerao" 
                        size={24} 
                        color="black"
                     />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigation.navigate("AddChat")} activeOpacity={0.5}>
                     <SimpleLineIcons name="pencil" size={24} color="black"/>
                  </TouchableOpacity>
               </View>
            )
         }
      })
   }, [navigation])

   const enterChat = (id, chatName) => {
      navigation.navigate("Chat", {
         id,
         chatName
      })
   }

   return (
      <SafeAreaView>
         <ScrollView className="h-full">
            {chats.map(chat => (
               <CustomListItem 
                  enterChat={enterChat} 
                  key={chat.id} 
                  id={chat.id} 
                  chatName={chat.name}
               />
            ))}
         </ScrollView>
      </SafeAreaView>
   )
}
export default HomeScreen
