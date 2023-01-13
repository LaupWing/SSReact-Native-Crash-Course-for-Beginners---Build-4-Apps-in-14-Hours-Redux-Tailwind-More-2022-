import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { styled } from "nativewind"

const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledView = styled(View)
const StyledText = styled(Text)

const DishRow = (
   id,
   name,
   description,
   price,
   image,
) => {
   return (
      <StyledTouchableOpacity>
         <StyledView>
            <StyledText className="text-lg mb-1">{name}</StyledText>
            <StyledText className="text-gray-400">{description}</StyledText>
         </StyledView>
      </StyledTouchableOpacity>
   )
}

export default DishRow
