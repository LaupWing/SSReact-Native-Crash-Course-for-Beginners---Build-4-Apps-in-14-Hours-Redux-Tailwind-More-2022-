import { createContext, useContext } from "react"
import * as Google from "expo-auth-session"

const AuthContext = createContext({})

const config = {
   iosClientId: "ios_key",
   scopes: ["profile", "email"],
   permissions: ["public_profile", "email", "gender", "location"]
}

export const AuthProvider = ({ children }) => {

   const signInWithGoogle = async () => {
      await Google.useAuthRequest()
   }
   
   return (
      <AuthContext.Provider value={null}>
         {children}
      </AuthContext.Provider>
   )
}
export default function useAuth () {
   return useContext(AuthContext)
}
