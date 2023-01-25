import { View, Text } from "react-native"
import Header from "../components/Header"
const MessageScreen = () => {
   return (
      <View>
         <Header title={"chat"} callEnabled/>
         <Text>MessageScreen</Text>
      </View>
   )
}
export default MessageScreen
