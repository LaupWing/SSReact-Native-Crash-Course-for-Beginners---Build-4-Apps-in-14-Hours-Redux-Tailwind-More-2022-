import { Avatar } from "@rneui/base"
import { useLayoutEffect, useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TextInput } from "react-native"
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"
import { Keyboard } from "react-native"
import { TouchableWithoutFeedback } from "react-native"
import { auth, db } from "../firebase"

const ChatScreen = ({navigation, route}) => {
   const [input, setInput] = useState("")
   const [messages, setMessages] = useState([])

   useLayoutEffect(() =>{
      navigation.setOptions({
         title: "Chat",
         headerTitleAlign: "left",
         headerTitle: () => (
            <View className="flex-row items-center">
               <Avatar rounded source={{
                  uri: ""
               }}/>
               <Text className="font-bold text-white ml-3">{route.params.chatName}</Text>
            </View>
         ),
         headerLeft: () => (
            <TouchableOpacity className="ml-3" onPress={navigation.goBack}>
               <AntDesign name="arrowLeft" size={24} color="white"/>
            </TouchableOpacity>
         ),
         headerRight: () => (
            <View className="flex-row justify-between w-20">
               <TouchableOpacity>
                  <FontAwesome name="video-camera" size={24} color="white"/>
               </TouchableOpacity>
               <TouchableOpacity>
                  <Ionicons name="call" size={24} color="white"/>
               </TouchableOpacity>
            </View>
         )
      })
   }, [navigation])

   const sendMessage = () => {
      Keyboard.dismiss()
      db.collection("chats").doc(route.params.id).collection("messages").add({
         timestamp: "", // need to add servertimestamp,
         message: input,
         displayName: auth.currentUser.displayName,
         email: auth.currentUser.email,
         photoURL: auth.currentUser.photoURL
      })
   }

   useLayoutEffect(() => {
      const unsubscribe = db.collection("chats")
         .doc(route.params.id)
         .collection("messages")
         .orderBy("timestamp", "desc")
         .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
         }))))

      return unsubscribe
   }, [route])

   return (
      <SafeAreaView className="flex-1">
         <StatusBar style="light"/>
         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
            keyboardVerticalOffset={90}
         >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <ScrollView>
                  {messages.map(message => (
                     message.email === auth.currentUser.email 
                        ? (
                           <View key={message.id} className="p-4 bg-gray-300 items-end rounded-sm mb-4 w-4/5 relative">
                              <Avatar source={{
                                 uri: ""
                              }} rounded className=""/>
                              <Text className="">{data.message}</Text>
                           </View>
                        )
                        : (
                           <View key={message.id} className="">
                              <Avatar source={{
                                 uri: ""
                              }} rounded className=""/>
                              <Text className="">{data.message}</Text>
                           </View>
                        )
                  ))}
               </ScrollView>
               <View className="flex-row w-full p-4 items-center">
                  <TextInput
                     value={input}
                     onChangeText={setInput}
                     placeholder="Signal Message"
                     className="flex-1 bottom-0 h-10 mr-4 border-transparent bg-gray-400 border p-3 text-gray-400 rounded"
                  />
                  <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                     <Ionicons name="send" size={24} color="blue"/>
                  </TouchableOpacity>
               </View>
            </TouchableWithoutFeedback>
         </KeyboardAvoidingView>
      </SafeAreaView>
   )
}
export default ChatScreen
