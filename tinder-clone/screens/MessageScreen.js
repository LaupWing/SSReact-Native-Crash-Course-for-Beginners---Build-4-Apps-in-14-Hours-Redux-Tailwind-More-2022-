import { useRoute } from "@react-navigation/native"
import { useState } from "react"
import { View, Text, SafeAreaView, TextInput, Button, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, FlatList } from "react-native"
import Header from "../components/Header"
import ReceiverMessage from "../components/ReceiverMessage"
import SenderMessage from "../components/SenderMessage"
import useAuth from "../hooks/useAuth"
import getMatchesUserinfo from "../lib/getMatchesUserinfo"

const MessageScreen = () => {
   const {user} = useAuth()
   const {params} = useRoute()
   const [input, setInput] = useState("")
   const [messages, setMessages] = useState([])
   const {matchedUserInfo} = params

   const sendMessage = () => {

   }

   return (
      <SafeAreaView className="flex-1">
         <Header 
            title={getMatchesUserinfo(matchedUserInfo, user.uid).displayName} 
            callEnabled
         />
         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
            keyboardVerticalOffset={10}
         >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <FlatList
                  data={messages}
                  keyExtractor={item => item.id}
                  renderItem={({ item: message }) => (
                     message.userid === user.uid 
                        ? (<SenderMessage key={message.id} message={message}/>)
                        : (<ReceiverMessage key={message.id} message={message}/>)
                  )}
                  className="pl-4" 
               />
            </TouchableWithoutFeedback>
            <View className="flex-row justify-between items-center border-t border-gray-200 px-5 py-2">
               <TextInput
                  className="h-10 text-lg"
                  value={input}
                  placeholder="Send Message..."
                  onChangeText={setInput}
                  onSubmitEditing={sendMessage}
               />
               <Button
                  title="Send"
                  onPress={sendMessage}
               />
            </View>
         </KeyboardAvoidingView>

      </SafeAreaView>
   )
}
export default MessageScreen
