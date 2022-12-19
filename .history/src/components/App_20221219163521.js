import React, {useContext} from "react";
import { ThemeContext } from "../context/theme";
import { UserProvider } from "../context/user";
import Header from "./Header";
import Profile from "./Profile";
// import the provider



function App() {
  //const [theme, setTheme] = useState("dark");
  const { theme } = useContext(ThemeContext);

  return ( 
    <main className={theme}>
    {/* wrap components that need access to context data in the provider*/}
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>
    </main>
  );
}

export default App;
