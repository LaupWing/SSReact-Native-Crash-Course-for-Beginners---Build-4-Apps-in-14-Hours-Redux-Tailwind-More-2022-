import { useNavigation } from "@react-navigation/native"
import { styled } from "nativewind"
import { useLayoutEffect } from "react"
import { Image, SafeAreaView, StatusBar, Text, View } from "react-native"

const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledView = styled(View)

const HomeScreen = () => {
   const navigation = useNavigation()

   useLayoutEffect(()=>{
      navigation.setOptions({
         headerShown: false
      })
   }, [])

   return (
      <SafeAreaView>
         <StyledView className="flex-row pb-3 items-center mx-4 space-x-2">
            <StyledImage
               source={{
                  uri: "https://links.papareact.com/wru"
               }}
               className="h-7 w-7 bg-gray-300 rounded-full"
            />
            <View>
               <StyledText className="font-bold text-gray-400 text-xs">
                  Deliver now
               </StyledText>
               <StyledText className="font-bold text-xl">
                  Deliver now
               </StyledText>
            </View>
         </StyledView>
      </SafeAreaView>
   )
}

export default HomeScreen
