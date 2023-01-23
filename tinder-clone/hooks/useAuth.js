import { createContext, useContext } from "react"
import * as Google from "expo-auth-session"
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth"
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

   const signInWithGoogle = async () => {
      Google.loadAsync(config).then(async (result) =>{
         if(result.responseType === "success"){
            const {idToken, accessToken}= result
            const credential = GoogleAuthProvider.credential(idToken, accessToken)

            await signInWithCredential(auth, credential)
         }
         return Promise.reject()
      })
   }
   
   return (
      <AuthContext.Provider value={{
         user:null,
         signInWithGoogle
      }}>
         {children}
      </AuthContext.Provider>
   )
}
export default function useAuth () {
   return useContext(AuthContext)
}
