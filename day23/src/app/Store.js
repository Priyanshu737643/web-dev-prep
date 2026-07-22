import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counter/counterSlice";
import themeReducer from "../Features/theme/themeSlice";

const loadTheme = () => {
  try {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
  preloadedState: {
    theme: {
      mode: loadTheme(),
    },
  },
});
