import { createContext, useContext } from "react"
import * as Google from "expo-auth-session"

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
            
         }
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
