import { Input } from "@rneui/base"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { View, Text, KeyboardAvoidingView } from "react-native"

const RegisterScreen = () => {
   const [name, setName] = useState("")

   return (
      <KeyboardAvoidingView 
         behavior="padding"
         className=""
      >
         <StatusBar style="light"/>
         <Text h3 className="mb-5">
            Create a signal account
         </Text>
         <View className="">
            <Input
               placeholder="Full Name"
               autoFocus
               textContentType="name"
            />
         </View>
      </KeyboardAvoidingView>
   )
}
export default RegisterScreen
