import { Button, Icon, Input } from "@rneui/base"
import { useLayoutEffect, useState } from "react"
import { View, Text } from "react-native"
import { db } from "../firebase"

const AddChatScreen = ({ navigation }) => {
   const [input, setInput] = useState("")

   useLayoutEffect(() => {
      navigation.setOptions({
         title: "Add a new Chat",
         headerBackTitle: "Chats",

      })
   }, [navigation])

   const createChat = async () => {
      await db.collection("chats").add({
         chatName: input
      }).then(() => navigation.goBack())
      .catch(err => alert(err.message))
   }

   return (
      <View className="bg-white p-10 h-full">
         <Input
            placeholder="Enter a new chat"
            value={input}
            onChangeText={setInput}
            onSubmitEditing={createChat}
            leftIcon={<Icon name="wechat" type="antdesign" color={"black"}/>}
         />
         <Button
            onPress={createChat}
            title="Create a new Chat"
         />
      </View>
   )
}

export default AddChatScreen
