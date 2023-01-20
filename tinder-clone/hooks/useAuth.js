import { createContext, useContext } from "react"
import * as Google from "expo-auth-session"

const AuthContext = createContext({})

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
