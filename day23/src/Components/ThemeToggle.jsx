import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/Hooks";
import { toggleTheme } from "../Features/theme/themeSlice";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Switch to {mode === "light" ? "dark" : "light"}
    </button>
  );
}
