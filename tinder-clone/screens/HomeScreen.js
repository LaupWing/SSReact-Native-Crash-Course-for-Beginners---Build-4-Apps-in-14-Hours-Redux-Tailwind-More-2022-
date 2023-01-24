import { useNavigation } from "@react-navigation/native"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { View, Text, Button, SafeAreaView, TouchableOpacity, Image, StyleSheet } from "react-native"
import useAuth from "../hooks/useAuth"
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons"
import Swiper from "react-native-deck-swiper"
import { collection, doc, getDocs, onSnapshot, query, setDoc, where } from "firebase/firestore"
import { db } from "../firebase"

const HomeScreen = () => {
   const navigation = useNavigation()
   const { user, logout } = useAuth()
   const [profiles, setProfiles] = useState()
   const swipeRef = useRef(null)

   useLayoutEffect(() => {
      const unsub = onSnapshot(doc(db, "users", user.uid) ,snapshot => {
         if(!snapshot.exists()){
            navigation.navigate("Modal")
         }
      })

      return unsub()
   }, [])

   useEffect(()=>{
      let unsub

      const fetchCards = async () => {
         const passes = await getDocs(collection(db, "users", user.uid, "passes"))
            .then(snapshot => snapshot.docs.map(doc => doc.id))
         const swipes = await getDocs(collection(db, "users", user.uid, "swipes"))
            .then(snapshot => snapshot.docs.map(doc => doc.id))

         const passedUserIds = passes.length > 0 ? passes : ["test"]

         unsub = onSnapshot(query(collection(db, "users"), where("id", "not-in", [...passedUserIds, ...swipes])), snapshot => {
            setProfiles(snapshot.docs.filter(doc => doc.id !== user.uid).map(doc => ({
               ...doc.data,
               id: doc.id
            })))
         }) 
      }

      fetchCards()
      return unsub
   }, [db])

   const swipeLeft = async (cardIndex) => {
      if(!profiles[cardIndex]){
         return
      }
      const userSwiped = profiles[cardIndex]
      console.log(`You swiped pass on ${userSwiped.displayname}`)

      setDoc(doc(db, "users", user.uid, "passes", userSwiped.id), userSwiped)
   }
   const swipeRight = async (cardIndex) => {
      if(!profiles[cardIndex]){
         return
      }
      const userSwiped = profiles[cardIndex]
      console.log(`You swiped match on ${userSwiped.displayname}`)

      setDoc(doc(db, "users", user.uid, "swipes", userSwiped.id), userSwiped)
   }

   return (
      <SafeAreaView className="flex-1">
         <View className="items-center relative">
            <TouchableOpacity 
               className="absolute left-5 top-3"
               onPress={logout}
            >
               <Image
                  source={{
                     uri: user.photoURL
                  }}
                  className="h-10 w-10 rounded-full"
               />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
               <Image 
                  source={require("../logo.png")}
                  className="h-14 w-14"
               />
            </TouchableOpacity>
            <TouchableOpacity 
               className="absolute right-5 top-3"
               onPress={() => navigation.navigate("Chat")}
            >
               <Ionicons
                  name="chatbubbles-sharp"
                  size={30}
                  color="#FF5864"
               />
            </TouchableOpacity>
         </View>
         <View className="flex-1 -mt-6">
            <Swiper 
               ref={swipeRef}
               containerStyle={{
                  backgroundColor: "transparent"

               }}
               cards={profiles}
               stackSize={5}
               cardIndex={0}
               verticalSwipe={false}
               onSwipedLeft={(cardIndex) => {
                  swipeLeft(cardIndex)
               }}
               onSwipedRight={(cardIndex) => {
                  swipeRight(cardIndex)
               }}
               animateCardOpacity
               overlayLabels={{
                  left: {
                     title: "NOPE",
                     style:{
                        label:{
                           textAlign: "right",
                           color: "red"
                        }
                     }
                  },
                  right: {
                     title: "MATCH",
                     style:{
                        label:{
                           color: "green"
                        }
                     }
                  },
               }}
               renderCard={card => card ? (
                  <View 
                     className="bg-white h-3/4 rounded-xl relative"
                     key={card.id}
                  >
                     <Image
                        className="h-full w-full rounded-xl absolute inset-0"
                        source={{
                           uri: card.photoURL
                        }}   
                     />
                     <View 
                        className="bg-white flex-row w-full h-20 absolute bottom-0 justify-between items-center px-6 py-2 rounded-b-xl"
                        style={styles.cardShadow}
                     >
                        <View>
                           <Text className="text-xl font-bold">{card.firstName} {card.lastName}</Text>
                           <Text className="">{card.job}</Text>
                        </View>
                        <Text className="text-2xl">{card.age}</Text>
                     </View>
                  </View>
               ) : (
                  <View>
                     <Text>No profiles</Text>
                  </View>
               )}
            />
         </View>

         <View className="flex flex-row justify-evenly">
            <TouchableOpacity 
               className="items-center justify-center rounded-full w-16 h-16 bg-red-200"
               onPress={() => swipeRef.current.swipeLeft()}
               >
               <Entypo color={"red"} name="cross" size={24}/>
            </TouchableOpacity>
            <TouchableOpacity 
               className="items-center justify-center rounded-full w-16 h-16 bg-green-200"
               onPress={() => swipeRef.current.swipeRight()}
            >
               <AntDesign color={"green"} name="heart" size={24}/>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}
export default HomeScreen


const styles = StyleSheet.create({
   cardShadow: {
      shadowColor: "#000",
      shadowOffset:{
         width: 0,
         height: 1
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2
   }
})