import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Footer from "@/componets/footer/Footer";
import Header from "@/componets/header/Header";
import {ThemeProvider} from "@/context/ThemeContext";
import AuthProvider from "@/componets/authProvider/AuthProvider";
import {ReactNode} from "react";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Intelligence',
    description: '',
}

export default function RootLayout({children,}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider>
            <AuthProvider>
                <div className="wrapper">
                    <Header/>
                    {children}
                    <Footer/>
                </div>
            </AuthProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}
