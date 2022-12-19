import React from "react";
import { ThemeContext } from "../context/theme";

function ThemedButton({ theme, ...props }) {
  const const theme = useContext(ThemeContext); = useContext(ThemeContext);

  return <button className={theme} {...props} />;
}

export default ThemedButton;
