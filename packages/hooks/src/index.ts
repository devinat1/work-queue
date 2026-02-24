import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type Theme = "light" | "dark";

const themeAtom = atomWithStorage<Theme>("theme", "light");

export function useTheme() {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}

export { themeAtom };
