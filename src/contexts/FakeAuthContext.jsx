/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react-refresh/only-export-components
import { createContext, useContext } from "react";

const AuthContext = createContext()

function AuthProvider({children}){
    return <AuthContext.Provider>{children}</AuthContext.Provider>
}

function useAuth(){
    const context = useContext()
    if(context === undefined) throw new Error("AuthContext was used outside provider")
}

