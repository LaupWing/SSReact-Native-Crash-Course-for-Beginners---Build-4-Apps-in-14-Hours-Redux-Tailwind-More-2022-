import { View, Text, TouchableOpacity, Image } from "react-native"
import React from "react"
import { styled } from "nativewind"
import Currency from "react-currency-formatter"
import { urlFor } from "../sanity"
import { MinusCircleIcon, PlusCircleIcon } from  "react-native-heroicons/solid"

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
   const [isPressed, setIsPressed] = useState(false)


   return (
      <>
         <StyledTouchableOpacity 
            onPress={() => setIsPressed(!isPressed)} 
            className="bg-white border p-4 border-gray-200"
         >
            <StyledView className="flex-row">
               <StyledView className="flex-1 pr-2">
                  <StyledText className="text-lg mb-1">{name}</StyledText>
                  <StyledText className="text-gray-400">{description}</StyledText>
                  <StyledText className="text-gray-400 mt-2">
                     <Currency currency="GBP" quantity={price}/>
                  </StyledText>
               </StyledView>
               <StyledView>
                  <StyledImage
                     style={{
                        borderWidth: 1,
                        borderColor: "#F3F3F4"
                     }}
                     source={{
                     uri: urlFor(image).url()
                     }}
                     className="h-20 w-20 bg-gray-300 p-4"
                  />
               </StyledView>
            </StyledView>
         </StyledTouchableOpacity>
         {isPressed && (
            <StyledView>
               <StyledView>
                  <StyledTouchableOpacity>
                     <MinusCircleIcon
                        // color={items.length > 0 ? "#00CCBB" : "gray"}
                        size={40}
                     />
                  </StyledTouchableOpacity>
               </StyledView>
            </StyledView>
         )}
      </>
   )
}

export default DishRow
 