import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { useState } from "react";
export const ContextObj = React.createContext("");
function Page() {
    const [cTheme, setTheme] = useState("light");
    const toggleTheme = () => {
        if (cTheme === "light") {
            setTheme("dark")
        } else {
            setTheme("light");
        }
    }
    return (
        <ContextObj.Provider value={cTheme}>
            <h1>Page </h1>
            <Header ></Header>
            <Main></Main>
            <Footer ></Footer>
            <button onClick={toggleTheme}>Switch Theme
            </button>
        </ContextObj.Provider>

    )
}

export default Page