import { View, Text } from "react-native"
import React, { useMemo, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { selectRestaurant } from "../features/restaurantSlice"
import { selectBasketItems } from "../features/basketSlice"

const BasketScreen = () => {
   const navigation = useNavigation()
   const restaurant = useSelector(selectRestaurant)
   const items = useSelector(selectBasketItems)
   const [groupedItemsInBasket, setGroupedItemsInBasket] = useState()
   const dispatch = useDispatch()

   useMemo(()=>{
      const groupedItems = items.reduce((results, item)=> {
         return (results[item.id] = results[item.id] || []).push(item)
      }, {})

      setGroupedItemsInBasket(groupedItems)
   }, [items])

   return (
      <View>
         <Text>BasketScreen</Text>
      </View>
   )
}

export default BasketScreen
