"use client"
import {FC, ReactNode} from "react";
import {SessionProvider} from "next-auth/react"

interface IAuthProvider {
    children: ReactNode
}

const AuthProvider: FC<IAuthProvider> = ({children}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AuthProvider;