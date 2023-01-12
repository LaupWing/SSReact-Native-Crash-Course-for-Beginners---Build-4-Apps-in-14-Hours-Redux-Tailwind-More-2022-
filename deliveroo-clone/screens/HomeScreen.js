import { useNavigation } from "@react-navigation/native"
import { styled } from "nativewind"
import { useLayoutEffect } from "react"
import { Image, SafeAreaView, StatusBar, Text, View } from "react-native"

const StyledText = styled(Text)
const StyledImage = styled(Image)

const HomeScreen = () => {
   const naviagtion = useNavigation()

   useLayoutEffect(()=>{
      naviagtion.setOptions({
         headerShown: false
      })
   }, [])

   return (
      <SafeAreaView>
         <View>
            <StyledImage
               source={{
                  uri: "https://links.papareact.com/wru"
               }}
               className="h-7 w-7 bg-gray-300"
            />
         </View>
         <StyledText className="text-red-600">
            
         </StyledText>
      </SafeAreaView>
   )
}

export default HomeScreen
