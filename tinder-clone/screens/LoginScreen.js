import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import { View, Text, Button, ImageBackground, TouchableOpacity } from "react-native"
import useAuth from "../hooks/useAuth"

const LoginScreen = () => {
   const { signInWithGoogle, loading } = useAuth()
   const navigation = useNavigation()

   useLayoutEffect(()=>{
      navigation.setOptions({
         headerShown: false
      })
   },[])

   return (
      <View className="flex-1">
         <ImageBackground 
            source={{uri: "https://tinder.com/static/tinder.png"}}
            resizeMode="cover"
            className="flex-1"
         >
            <TouchableOpacity 
               style={{
                  marginHorizontal: "25%"
               }} 
               className="absolute bottom-40 w-52 bg-white rounded-2xl"
               onPress={signInWithGoogle}
            >
               <Text className="text-center font-semibold">
                  Sign in & get swiping
               </Text>
            </TouchableOpacity>

         </ImageBackground>
      </View>
   )
}
export default LoginScreen
