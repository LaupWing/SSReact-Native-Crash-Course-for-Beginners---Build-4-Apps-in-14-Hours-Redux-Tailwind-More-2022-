import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native"
import React, { useMemo, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { selectRestaurant } from "../features/restaurantSlice"
import { removeFromBasket, selectBasketItems, selectBasketTotal } from "../features/basketSlice"
import { styled } from "nativewind"
import { XCircleIcon } from "react-native-heroicons/outline"
import Currency from "react-currency-formatter"
import { urlFor } from "../sanity"

const StyledSafeAreaView = styled(SafeAreaView)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledScrollView = styled(ScrollView)

const BasketScreen = () => {
   const navigation = useNavigation()
   const restaurant = useSelector(selectRestaurant)
   const items = useSelector(selectBasketItems)
   const basketTotal = useSelector(selectBasketTotal)
   const [groupedItemsInBasket, setGroupedItemsInBasket] = useState()
   const dispatch = useDispatch()

   useMemo(()=>{
      const groupedItems = items.reduce((results, item)=> {
         return (results[item.id] = results[item.id] || []).push(item)
      }, {})

      setGroupedItemsInBasket(groupedItems)
   }, [items])

   return (
      <StyledSafeAreaView className="flex-1 bg-white">
         <StyledView className="flex-1 bg-gray-100">
            <StyledView className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
               <StyledView>
                  <StyledText className="text-lg font-bold text-center">Basket</StyledText>
                  <StyledText className="text-gray-400 text-center">{restaurant.title}</StyledText>
               </StyledView>

               <TouchableOpacity
                  onPress={navigation.goBack}
                  className="rounded-full bg-gray-100 absolute top-3 right-5"
               >
                  <XCircleIcon color={"#00CCBB"} height={50} width={50}/>
               </TouchableOpacity>

            </StyledView>

            <StyledView className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
               <StyledImage
                  source={{
                     uri: "https://links.papareact.com/wru"
                  }}
                  className="h-7 w-7 bg-gray-300 p-4 rounded-full"
               />
               <StyledText className="flex-1">
                  Deliver in 50-75 min
               </StyledText>
               <StyledTouchableOpacity>
                  <StyledText className="text-[#00CCBB]">Change</StyledText>
               </StyledTouchableOpacity>
            </StyledView>
            <StyledScrollView className="divide-y divide-gray-200">
               {Object.entries(groupedItemsInBasket).map(({key, items})=> (
                  <StyledView 
                     key={key}
                     className="flex-row items-center space-x-3 bg-white py-2 px-5"
                  >
                     <StyledText className="text-[#00CCBB]">
                        {items.length} x 
                     </StyledText>
                     <StyledImage
                        source={{
                           uri: urlFor(items[0]?.image).url()
                        }}
                        className="w-12 h-12 rounded-full"
                     />
                     <StyledText className="flex-1">
                        {items[0]?.name}
                     </StyledText>
                     <StyledText className="text-gray-600">
                        <Currency quantity={items[0]?.price} currency="GBP"/>
                     </StyledText>

                     <StyledTouchableOpacity>
                        <StyledText
                           className="text-[#00CCBB] text-xs"
                           onPress={() => dispatch(removeFromBasket({id: key}))}
                        >
                           Remove
                        </StyledText>
                     </StyledTouchableOpacity>
                  </StyledView>
               ))}
            </StyledScrollView>
            
            <StyledView className="p-5 bg-white mt-5 space-y-4">
               <StyledView className="flex-row justy-between">
                  <StyledText className="text-gray-400">
                     Subtotal
                  </StyledText>
                  <StyledText className="text-gray-400">
                     <Currency quantity={basketTotal} currency="GBP"/>
                  </StyledText>
               </StyledView>
            </StyledView>
            
            <StyledView className="p-5 bg-white mt-5 space-y-4">
               <StyledView className="flex-row justy-between">
                  <StyledText className="text-gray-400">
                     Deliver Fee
                  </StyledText>
                  <StyledText className="text-gray-400">
                     <Currency quantity={5.99} currency="GBP"/>
                  </StyledText>
               </StyledView>
            </StyledView>
            
            <StyledView className="p-5 bg-white mt-5 space-y-4">
               <StyledView className="flex-row justy-between">
                  <StyledText>
                     Order total
                  </StyledText>
                  <StyledText className="font-extrabold">
                     <Currency quantity={basketTotal + 5.99} currency="GBP"/>
                  </StyledText>
               </StyledView>
            </StyledView>
            
            <StyledTouchableOpacity 
               className="rounded-lg bg-[#00CCBB] p-4"
               onPress={()=> navigation.navigate("PreparingOrder")}
            >
               <StyledText className="text-center text-white text-lg font-bold">
                  Placeholder
               </StyledText>
            </StyledTouchableOpacity>
         </StyledView>
      </StyledSafeAreaView>
   )
}

export default BasketScreen
