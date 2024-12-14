"use client";

import { useTheme } from "../_context/ThemeContext";

function Theme({ children }) {
  const { theme } = useTheme();
  return (
    <html className={`${theme}`} lang="en">
      {children}
    </html>
  );
}

export default Theme;
