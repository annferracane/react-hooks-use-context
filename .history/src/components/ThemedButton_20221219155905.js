import React from "react";
import { ThemeContext } from "../context/theme";

function ThemedButton({...props }) {
  const const theme = useContext(ThemeContext); = useContext(ThemeContext);

  return <button className={theme} {...props} />;
}

export default ThemedButton;
