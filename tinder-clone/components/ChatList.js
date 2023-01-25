import { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import useAuth from "../hooks/useAuth"
import ChatRow from "./ChatRow"

const ChatList = () => {
   const [matches, setMatches] = useState([])
   const {user} = useAuth()

   useEffect(() => 
      onSnapshot(query(collection(db, "matches"), where("usersMatched", "array-contains", user.uid)), snapshot => setMatches(snapshot.docs.map(doc =>({
         ...doc.data(),
         id: doc.id
      }))))
   , [user])

   return (
      matches.length > 0? (<FlatList
         data={matches}
         className="h-full"
         keyExtractor={item => item.id}
         renderItem={({item}) =><ChatRow matchDetails={item}/>}
      />) : (
         <Text>No matches</Text>
      )
   )
}
export default ChatList
