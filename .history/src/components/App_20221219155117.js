import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
// import the provider
import { UserProvider } from "../context/user";
import { ThemeProvider } from "../context/theme";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider>
    <main className={theme}>
    {/* wrap components that need access to context data in the provider*/}
      
        <UserProvider>
          <Header />
          <Profile />
        </UserProvider>
      
    </main>
    </ThemeProvider>
  );
}

export default App;
