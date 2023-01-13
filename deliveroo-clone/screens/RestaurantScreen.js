import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import React, { useLayoutEffect } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import { styled } from "nativewind"
import { urlFor } from "../sanity"
import { 
   ArrowLeftIcon,
   ChevronRightIcon,
   MapPinIcon,
   StarIcon
} from "react-native-heroicons/solid"
import {
   QuestionMarkCircleIcon
} from "react-native-heroicons/outline"

const StyledScrollView = styled(ScrollView)
const StyledView = styled(View)
const StyledImage = styled(Image)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledText = styled(Text)

const RestaurantScreen = () => {
   const navigation = useNavigation()

   const {params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat
   }} = useRoute()

   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false
      })
   }, [])

   return (
      <StyledScrollView>
         <StyledView className="relative">
            <StyledImage
               source={{
                  uri: urlFor(imgUrl).url()
               }}
               className="w-full h-56 bg-gray-300 p-4"
            />
            <StyledTouchableOpacity 
               className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
               onPress={() => navigation.goBack()}
            >
               <ArrowLeftIcon size={20} color={"#00CCBB"} />
            </StyledTouchableOpacity>
         </StyledView>
         <StyledView className="bg-white">
            <StyledView className="px-4 pt-4">
               <StyledText className="text-3xl font-bold">{title}</StyledText>
               <StyledView className="flex-row space-x-2 my-1">
                  <StyledView className="flex-row items-center space-x-1">
                     <StarIcon 
                        color={"green"} 
                        opacity={0.5} 
                        size={22}
                     />
                     <StyledText className="text-xs text-gray-500">
                        <StyledText className="text-green-500">{rating}</StyledText> . {genre}
                     </StyledText>
                  </StyledView>

                  <StyledView className="flex-row items-center space-x-1">
                     <MapPinIcon 
                        color={"gray"} 
                        opacity={0.4} 
                        size={22}
                     />
                     <StyledText className="text-xs text-gray-500">
                        Nearby . {address}
                     </StyledText>
                  </StyledView>
               </StyledView>

               <StyledText className="text-gray-500 mt-2 pb-4">
                  {short_description}
               </StyledText>
            </StyledView>

            <StyledTouchableOpacity>
               <QuestionMarkCircleIcon color={"gray"} opacity={0.6} size={20}/>
            </StyledTouchableOpacity>
         </StyledView>
      </StyledScrollView>
   )
}

export default RestaurantScreen
