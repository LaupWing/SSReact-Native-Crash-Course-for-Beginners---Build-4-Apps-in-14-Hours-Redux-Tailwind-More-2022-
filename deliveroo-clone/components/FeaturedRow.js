import { styled } from "nativewind"
import { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { ArrowRightIcon } from "react-native-heroicons/outline"
import client from "../sanity"
import RestaurantCard from "./RestaurantCard"

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledScrollView = styled(ScrollView)

const FeaturedRow = ({ title, description, id}) => {
   const [restaurants, setRestaurants] = useState([])

   useEffect(() => {
      client.fetch(`
         *[_type == "featured" && _id == $id]{
            ...,
            restaurants[]=>{
               ...,
               dishes[]=>,
               type->{
                  name
               }
            }
         }[0]
      `, {id}).then(data => setRestaurants(data?.restaurants))
   }, [])

   return (
      <View>
         <StyledView className="mt-4 flex-row items-center justify-between px-4">
            <Text>
               Featured Row
            </Text>
            <ArrowRightIcon color={"#00CCBB"}/>
         </StyledView>
         <StyledText className="text-xs text-gray-500 px-4">
            {description}
         </StyledText>
         <StyledScrollView 
            className="pt-4"
            horizontal
            contentContainerStyle={{
               paddingHorizontal: 15
            }}
            showsHorizontalScrollIndicator={false}
         >
            {restaurants?.map(restaurant => (
               <RestaurantCard
                  key={restaurant._id}
                  id={restaurant._id}
                  imgUrl={restaurant.image}
                  address={restaurant.address}
                  title={restaurant.name}
                  dishes={restaurant.dishes}
                  rating={restaurant.rating}
                  short_description={restaurant.short_description}
                  genre={restaurant.type?.name}
                  long={restaurant.long}
                  lat={restaurant.lat}
               />
            ))}
         </StyledScrollView>
      </View>
   )
}

export default FeaturedRow
