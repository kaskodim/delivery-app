export const getSystemTheme = () => {
  if (typeof window !== "undefined") {
    const isDarkSystemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDarkSystemTheme ? "dark" : "light";
  } else return "light";
};
