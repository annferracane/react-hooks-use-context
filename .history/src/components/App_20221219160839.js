import React, {useState, useContext} from "react";
import Header from "./Header";
import Profile from "./Profile";
// import the provider
import { UserProvider } from "../context/user";
import { ThemeProvider, ThemeContext } from "../context/theme";

function App() {
  const theme] = useState("dark");
  //const { theme } = useContext(ThemeContext);

  return (

      <main className={theme}>
      <ThemeProvider>
      {/* wrap components that need access to context data in the provider*/}
        <UserProvider>
          <Header />
          <Profile />
        </UserProvider>
        </ThemeProvider>
      </main>
    
  );
}

export default App;
