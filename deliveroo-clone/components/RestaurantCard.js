import { styled } from "nativewind"
import { View, Text, TouchableOpacity, Image } from "react-native"

const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledImage = styled(Image)
const StyledText = styled(Text)

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
         <View>
            <StyledText className="font-bold text-lg pt-2">{title}</StyledText>
         </View>
      </StyledTouchableOpacity>
   )
}

export default RestaurantCard