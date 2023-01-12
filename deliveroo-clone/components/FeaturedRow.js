import { styled } from "nativewind"
import { ScrollView, Text, View } from "react-native"
import { ArrowRightIcon } from "react-native-heroicons/outline"

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledScrollView = styled(ScrollView)

const FeaturedRow = ({ title, description, id}) => {
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
            
         </StyledScrollView>
      </View>
   )
}

export default FeaturedRow
