import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import { View, Text, Button } from "react-native"
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
      <View>
         <Text>{loading ? "Loading" : "Login to the app"}</Text>
         <Button
            title="login"
            onPress={signInWithGoogle}
         />
      </View>
   )
}
export default LoginScreen
