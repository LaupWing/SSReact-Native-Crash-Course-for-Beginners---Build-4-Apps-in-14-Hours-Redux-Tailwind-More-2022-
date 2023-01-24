import { useNavigation, useRoute } from "@react-navigation/native"
import { View, Text } from "react-native"

const MatchScreen = () => {
   const navigation = useNavigation()
   const { params} = useRoute()
   const {loggedInProfile, userSwiped} = params

   return (
      <View>
         <Text>MatchScreen</Text>
      </View>
   )
}
export default MatchScreen
