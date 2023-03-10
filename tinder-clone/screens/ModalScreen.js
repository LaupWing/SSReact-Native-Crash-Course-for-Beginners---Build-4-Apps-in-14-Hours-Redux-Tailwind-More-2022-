import { useNavigation } from "@react-navigation/native"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { useState } from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import { db } from "../firebase"
import useAuth from "../hooks/useAuth"

const ModalScreen = () => {
   const {user} = useAuth()
   const [image, setImage] = useState(null)
   const navigation = useNavigation()

   const updateUserProfile = () => {
      setDoc(doc(db, "user", user.uid, {
         image,
         id: user.uid,
         displayName: user.displayName,
         timestamp: serverTimestamp()
      })).then(()=>{
         navigation.navigate("Home")
      }).catch(err => {
         alert(err.message)
      })
   }

   return (
      <View className="flex-1 items-center pt-1">
         <Image
            className="h-20 w-full"
            resizeMethod="contain"
            source={{
               uri: "links"
            }}
         />
         <Text className="text-gray-500 text-xl font-bold">
            Welcome {user.displayName}
         </Text>

         <Text className="text-center p-4 font-bold text-red-400">
            Step 1: The profile pic
         </Text>
         <TextInput
            className="text-center text-xl pb-2"
            placeholder="Enter a profile pic url"
            value={image}
            onChangeText={setImage}
         />
         <Text className="text-center p-4 font-bold text-red-400">
            Step 2: The job
         </Text>
         <TextInput
            className="text-center text-xl pb-2"
            placeholder="Enter your occupation"
         />
         <Text className="text-center p-4 font-bold text-red-400">
            Step 3: The age
         </Text>
         <TextInput
            className="text-center text-xl pb-2"
            placeholder="Enter your age"
            keyboardType={"numeric"}
            maxLength={2}
         />

         <TouchableOpacity 
            className="w-64 p-3 rounded-xl absolute bottom-10 bg-red-400"
            onPress={updateUserProfile}
         >
            <Text className="text-center text-white text-xl">Update profile</Text>
         </TouchableOpacity>
      </View>
   )
}
export default ModalScreen
