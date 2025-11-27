import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
export function useThemeHook() {
    // const [isDarkMode, setIsDarkMode] = useState<boolean>(true)


    // useEffect(() => {
    //     const stoderTheme = localStorage.getItem("theme")
    //     if (stoderTheme === "dark") {
    //         setIsDarkMode(true)
    //         document.documentElement.classList.add("dark")
    //     } else {
    //         localStorage.setItem("theme", "light")
    //         setIsDarkMode(false)
    //     }
    // }, [])

    // const handleChange = () => {
    //     if (isDarkMode) {
    //         setIsDarkMode(false)
    //         document.documentElement.classList.remove("dark")
    //         localStorage.setItem("theme", "light")
    //     } else {
    //         setIsDarkMode(true)
    //         document.documentElement.classList.add("dark")
    //         localStorage.setItem("theme", "dark")
    //     }
    // }
    // return {isDarkMode, handleChange}
    
}