import { ScrollView, Text, View } from "react-native"
import CategoryCard from "./CategoryCard"

const Categories = () => {
   return (
      <ScrollView 
         horizontal
         contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
         }}
         showsHorizontalScrollIndicator={false}
      >
         <CategoryCard/>
         <CategoryCard/>
         <CategoryCard/>
         <CategoryCard/>
      </ScrollView>
   )
}

export default Categories
