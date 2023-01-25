import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { collection, onSnapshot, query, where } from "firebase/firestore"

const ChatList = () => {
   const [matches, setMatches] = useState([])

   useEffect(() => 
      onSnapshot(query(collection(db, "matches"), where("usersMatches", "array-contains", user.uid)), snapshot => setMatches(snapshot.docs.map(doc =>({
         ...doc.data(),
         id: doc.id
      }))))
   , [])

   return (
      <View>
         <Text>ChatList</Text>
      </View>
   )
}
export default ChatList
