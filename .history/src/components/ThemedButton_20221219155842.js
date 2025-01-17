import React from "react";
import { ThemeContext } from "../context/theme";

function ThemedButton({ theme, ...props }) {
  return <button className={theme} {...props} />;
}

export default ThemedButton;
