import { createContext, useContext, useEffect, useState } from "react"
import * as Google from "expo-auth-session"
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from "firebase/auth"
import { auth } from "../firebase"

const AuthContext = createContext({
   user: null,
   signInWithGoogle: () => {}
})

const config = {
   iosClientId: "ios_key",
   androidClientId: "android_key",
   scopes: ["profile", "email"],
   permissions: ["public_profile", "email", "gender", "location"]
}

export const AuthProvider = ({ children }) => {
   const [error, setError] = useState("")
   const [user, setUser] = useState(null)
   const [loadingInitial, setLoadingInitial] = useState(true)

   useEffect(() => {
      const unsub = onAuthStateChanged(auth, user =>{
         if(user){
            setUser(user)
         }else {
            setUser(null)
         }
         setLoadingInitial(false)
      })
      return unsub()
   }, [])

   const signInWithGoogle = async () => {
      Google.loadAsync(config).then(async (result) =>{
         if(result.responseType === "success"){
            const {idToken, accessToken}= result
            const credential = GoogleAuthProvider.credential(idToken, accessToken)

            await signInWithCredential(auth, credential)
         }
         return Promise.reject()
      })
      .catch(err => setError(err.message))
   }
   
   return (
      <AuthContext.Provider value={{
         user,
         signInWithGoogle
      }}>
         {children}
      </AuthContext.Provider>
   )
}
export default function useAuth () {
   return useContext(AuthContext)
}
