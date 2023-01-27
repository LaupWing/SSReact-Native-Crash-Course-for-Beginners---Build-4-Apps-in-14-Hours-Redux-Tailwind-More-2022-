import { Avatar, ListItem } from "@rneui/base"
import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { db } from "../firebase"

const CustomListItem = ({
   id,
   chatName,
   enterChat
}) => {
   const [chatMessages, setChatMessages] = useState([]) 

   useEffect(() => {
      const unsubscribe = db.collection("chats").doc(id).collection("messages").orderBy("timestamp", "desc").onSnapshot(snapshot => {
         setChatMessages(snapshot.docs.map(x => ({
            ...x.data()
         })))
      })

      return unsubscribe
   }, [])

   return (
      <ListItem onPress={() => enterChat(id, enterChat)} key={id} bottomDivider>
         <Avatar
            rounded
            source={{
               uri: chatMessages?.[0].photoURL || ""
            }}
         />
         <ListItem.Content>
            <ListItem.Title className="font-bold">
               {chatName}
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
               {chatMessages?.[0].displayName 
                  ?  chatMessages?.[0].displayName
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
               }
            </ListItem.Subtitle>
         </ListItem.Content>
      </ListItem>
   )
}
export default CustomListItem
