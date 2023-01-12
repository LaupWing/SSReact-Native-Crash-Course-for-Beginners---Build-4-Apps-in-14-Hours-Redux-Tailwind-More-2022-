import { useNavigation } from "@react-navigation/native"
import { styled } from "nativewind"
import { useLayoutEffect } from "react"
import { Image, SafeAreaView, Text, TextInput, View } from "react-native"
import {
   ChevronDownIcon, 
   UserIcon,
   MagnifyingGlassIcon,
   AdjustmentsVerticalIcon
} from "react-native-heroicons/outline"

const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledView = styled(View)
const StyledSafeAreaView = styled(SafeAreaView)

const HomeScreen = () => {
   const navigation = useNavigation()

   useLayoutEffect(()=>{
      navigation.setOptions({
         headerShown: false
      })
   }, [])

   return (
      <StyledSafeAreaView className="bg-white pt-5">
         <StyledView className="flex-row pb-3 items-center mx-4 space-x-2">
            <StyledImage
               source={{
                  uri: "https://links.papareact.com/wru"
               }}
               className="h-7 w-7 bg-gray-300 rounded-full"
            />
            <StyledView className="flex-1">
               <StyledText className="font-bold text-gray-400 text-xs">
                  Deliver now
               </StyledText>
               <StyledText className="font-bold text-xl">
                  Current Locastion
                  <ChevronDownIcon size={20} color="#00CCBB"/>
               </StyledText>
            </StyledView>
            <UserIcon size={35}  color="#00CCBB"/>

         </StyledView>
         <StyledView>
            <StyledView>
               <MagnifyingGlassIcon/>
               <TextInput/>
            </StyledView>   
            <AdjustmentsVerticalIcon color="#00CCBB"/>
         </StyledView>
      </StyledSafeAreaView>
   )
}

export default HomeScreen
