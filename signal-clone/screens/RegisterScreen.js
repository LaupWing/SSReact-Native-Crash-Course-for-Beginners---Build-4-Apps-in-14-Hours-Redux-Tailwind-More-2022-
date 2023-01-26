import { Input, Text } from "@rneui/base"
import { Button } from "@rneui/themed"
import { StatusBar } from "expo-status-bar"
import { useLayoutEffect, useState } from "react"
import { View, KeyboardAvoidingView } from "react-native"
import { auth } from "../firebase"

const RegisterScreen = ({navigation}) => {
   const [name, setName] = useState("")

   const register = () => {
      auth.createUserWithEmailAndPassword(name, name)
         .then(user => {
            user.user.updateProfile({
               displayName: name,
               photoURL: ""
            })
         })
         .catch(err => alert(err.message))
   }

   useLayoutEffect(() => {
      navigation.setOptions({
         headerBackTitle: "Back to login"
      })
   },[navigation])

   return (
      <KeyboardAvoidingView 
         behavior="padding"
         className="flex-1 bg-white items-center justify-center p-10"
      >
         <StatusBar style="light"/>
         <Text h3 className="mb-5">
            Create a signal account
         </Text>
         <View className="w-30">
            <Input
               placeholder="Full Name"
               autoFocus
               textContentType="name"
               value={name}
               onChangeText={setName}
            />
            <Input
               placeholder="Full Name"
               textContentType="name"
            />
            <Input
               placeholder="Full Name"
               textContentType="name"
            />
            <Input
               placeholder="Full Name"
               textContentType="name"
            />
            <Input
               placeholder="Full Name"
               textContentType="name"
            />
         </View>
         <Button
            title={"Register"}
            onPress={register}
            raised
            containerStyle={{
               width: 200,
               marginTop: 10
            }}
         />
         <View className="h-20"/>
      </KeyboardAvoidingView>
   )
}
export default RegisterScreen
