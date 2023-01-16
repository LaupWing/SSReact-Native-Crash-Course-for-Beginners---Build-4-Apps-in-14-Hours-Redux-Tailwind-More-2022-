import { View, Text, TouchableOpacity, Image } from "react-native"
import React from "react"
import { styled } from "nativewind"
import Currency from "react-currency-formatter"
import { urlFor } from "../sanity"

const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)

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
            <StyledText className="text-gray-400 mt-2">
               <Currency currency="GBP" quantity={price}/>
            </StyledText>
         </StyledView>
         <StyledView>
            <StyledImage
               source={{
                 uri: urlFor(image).url()
               }}
               className="h-20 w-20 bg-gray-300 p-4"
            />
         </StyledView>
      </StyledTouchableOpacity>
   )
}

export default DishRow
 