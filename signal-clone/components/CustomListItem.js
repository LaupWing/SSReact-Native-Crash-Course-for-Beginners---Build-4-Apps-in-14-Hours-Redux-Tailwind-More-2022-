import { Avatar, ListItem } from "@rneui/base"
import { View, Text } from "react-native"

const CustomListItem = ({
   id,
   chatName,
   enterChat
}) => {
   return (
      <ListItem onPress={() => enterChat(id, enterChat)} key={id} bottomDivider>
         <Avatar
            rounded
            source={{
               uri: ""
            }}
         />
         <ListItem.Content>
            <ListItem.Title className="font-bold">
               {chatName}
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem.Subtitle>
         </ListItem.Content>
      </ListItem>
   )
}
export default CustomListItem
