import { styled } from "nativewind"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { StarIcon } from "react-native-heroicons/solid"
import { MapPinIcon } from "react-native-heroicons/outline"

const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledImage = styled(Image)
const StyledText = styled(Text)
const StyledView = styled(View)

const RestaurantCard = ({
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
}) => {
   return (
      <StyledTouchableOpacity className="">
         <StyledImage
            source={{
               uri: imgUrl
            }}
            className="w-64 h-36 rounded-sm"
         />
         <StyledView className="px-3 pb-4">
            <StyledText className="font-bold text-lg pt-2">{title}</StyledText>
            <StyledView className="flex-row items-center space-x-1">
               <StarIcon color={"green"} opacity={0.5} size={22}/>
               <StyledText className="text-gray-500">
                  <StyledText className="text-green-500">{rating}</StyledText> . {genre}
               </StyledText>
            </StyledView>
         </StyledView>
      </StyledTouchableOpacity>
   )
}

export default RestaurantCard