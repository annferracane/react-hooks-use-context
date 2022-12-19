import React, {useState} from "react";

// create the context
const ThemeContext = React.createContext();

// create a provider component
function ThemeProvider({ children }) {
    const [user, setUser] = useState(null);
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <ThemeContext.Provider value={{theme, setUser}}>{children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvider };