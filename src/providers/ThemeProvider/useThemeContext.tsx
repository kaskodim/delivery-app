import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider/ThemeContext";

// TODO: 5. Назовем хук, для удобства (необязательный шаг)
export const useThemeContext = () => useContext(ThemeContext);
