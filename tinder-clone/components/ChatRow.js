import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import useAuth from "../hooks/useAuth"
import getMatchesUserinfo from "../lib/getMatchesUserinfo"

const ChatRow = ({matchDetails}) => {
   const navigation = useNavigation()
   const { user } = useAuth()
   const [matchedUserInfo, setMatchedUserInfo] = useState(null)

   useEffect(() =>{
      setMatchedUserInfo(getMatchesUserinfo(matchDetails.users, user.uid))
   }, [matchDetails, user])

   useEffect(() => {

   }, [])

   return (
      <TouchableOpacity 
         className="flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg"
         onPress={() => navigation.navigate("Message", {
            matchedUserInfo
         })}
      >
         <Image
            className="rounded-full h-16 w-16 mr-4"
            source={{
               uri: matchedUserInfo.image
            }}
         />
      </TouchableOpacity>
   )
}
export default ChatRow
