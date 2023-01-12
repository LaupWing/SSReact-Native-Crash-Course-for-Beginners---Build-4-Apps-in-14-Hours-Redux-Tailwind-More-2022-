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
         <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing"/>
         <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing"/>
         <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing"/>
         <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing"/>
      </ScrollView>
   )
}

export default Categories
