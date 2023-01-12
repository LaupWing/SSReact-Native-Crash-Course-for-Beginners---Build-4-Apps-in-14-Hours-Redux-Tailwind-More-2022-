import { styled } from "nativewind"
import { Image, Text, TouchableOpacity, View } from "react-native"

const StyledImage = styled(Image)
const StyledText = styled(Text)
const StyledTouchableOpacity = styled(TouchableOpacity)

const CategoryCard = ({ title, imgUrl}) => {
   return (
      <StyledTouchableOpacity className="mr-2 relative">
         <StyledImage
            source={{
               uri: imgUrl
            }}
            className="h-20 w-20 rounded"
         />
         <StyledText className="absolute bottom-1 text-white left-1 font-bold">
            {title}
         </StyledText>
      </StyledTouchableOpacity>
   )
}

export default CategoryCard
