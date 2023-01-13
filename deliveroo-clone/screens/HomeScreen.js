import { useNavigation } from "@react-navigation/native"
import { styled } from "nativewind"
import { useEffect, useLayoutEffect, useState } from "react"
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native"
import {
   ChevronDownIcon, 
   UserIcon,
   MagnifyingGlassIcon,
   AdjustmentsVerticalIcon
} from "react-native-heroicons/outline"
import Categories from "../components/Categories"
import FeaturedRow from "../components/FeaturedRow"
import client from "../sanity"

const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledView = styled(View)
const StyledSafeAreaView = styled(SafeAreaView)
const StyledScrollView = styled(ScrollView)

const HomeScreen = () => {
   const navigation = useNavigation()
   const [featuredCategories, setFeaturedCategories] = useState([])

   useLayoutEffect(()=>{
      navigation.setOptions({
         headerShown: false
      })
   }, [])

   useEffect(() => {
      client.fetch(`
         *[_type == "featured"] {
            ...,
            restaurants[]->{
               ...,
               dishes[]->
            }
         }
      `).then(data => setFeaturedCategories(data))
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
         <StyledView className="flex-row items-center space-x-2 pb-2 mx-4">
            <StyledView className="flex-row space-x-2 flex-1 bg-gray-200 p-3 px-4">
               <MagnifyingGlassIcon color={"gray"} size={20}/>
               <TextInput 
                  placeholder="Restaurants and cuisines"
                  keyboardType="default"
               />
            </StyledView>   
            <AdjustmentsVerticalIcon color="#00CCBB"/>
         </StyledView>
         <StyledScrollView 
            className="bg-gray-100"
            contentContainerStyle={{
               paddingBottom: 100
            }}
         >
            <Categories/>
            <FeaturedRow
               title={"Featured"}
               description={"Paid placements from our partners"}
               id={"123"}
            />
            <FeaturedRow
               title={"Featured"}
               description={"Paid placements from our partners"}
               id={"1234"}
            />
            <FeaturedRow
               title={"Featured"}
               description={"Paid placements from our partners"}
               id={"12345"}
            />
         </StyledScrollView>
      </StyledSafeAreaView>
   )
}

export default HomeScreen
