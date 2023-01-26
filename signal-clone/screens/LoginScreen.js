import { Button, Image, Input } from "@rneui/base"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { View, Text, KeyboardAvoidingView } from "react-native"

const LoginScreen = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const signIn = () => {

   }

   return (
      <KeyboardAvoidingView 
         behavior="padding" 
         enabled 
         className="flex-1 items-center justify-center p-10 bg-white"
      >
         <StatusBar style="light"/>
         <Text>LoginScreen</Text>
         <Image 
            source={{
               uri: ""
            }}
            className="w-20 h-20"
         />
         <View className="">
            <Input 
               placeholder="Email"
               className="w-24"
               autoFocus
               textContentType="email"     
               value={email}
               onChangeText={setEmail}
            />
            <Input 
               placeholder="Password" 
               className="w-24"    
               secureTextEntry
               textContentType="password"
               value={password}
               onChangeText={setPassword}
            />
         </View>
         <Button 
            containerStyle={{
               width: 200,
               marginTop: 10
            }} 
            title={"Login"}
            onPress={signIn}
         />
         <Button 
            type="outline" 
            containerStyle={{
               width: 200,
               marginTop: 10
            }} 
            title={"Register"}
         />
         <View className="h-20"/>
      </KeyboardAvoidingView>
   )
}
export default LoginScreen
