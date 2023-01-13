import { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import client, { urlFor } from "../sanity"
import CategoryCard from "./CategoryCard"

const Categories = () => {
   const [categories, setCategories] = useState([])

   useEffect(() => {
      client.fetch(`
         *[type == "category"]
      `).then(data => setCategories(data))
   }, [])

   return (
      <ScrollView 
         horizontal
         contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
         }}
         showsHorizontalScrollIndicator={false}
      >
         {categories.map(category => (
            <CategoryCard 
               key={category._id} 
               imgUrl={urlFor(category.image).width(200).url()} 
               title={category.name}
            />
         ))}
      </ScrollView>
   )
}

export default Categories
