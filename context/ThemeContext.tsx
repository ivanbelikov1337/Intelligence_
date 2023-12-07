"use client";
import {createContext, FC, ReactNode, useEffect, useState} from "react";


// define the props
type Themes = "dark" | "light" | null
type ThemeState = {
    mode?: Themes;
    toggle?(theme: Themes): void;
    children?: ReactNode
};

export const ThemeContext = createContext<ThemeState | null>(null)

export const ThemeProvider: FC<ThemeState> = ({children}) => {
    const userTime = new Date().getHours()
    const [mode, setMode] = useState<Themes>(null);

    useEffect(() => {
        userTime >= 8 && userTime <= 20 ? setMode("light") : setMode("dark")
    }, [])
    const toggle = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{toggle, mode}}>
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    )
};