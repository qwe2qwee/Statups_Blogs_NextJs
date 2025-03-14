"use client";

import { create } from "zustand";

type LanguageState = {
  lang: "ar" | "en";
  setLang: (newLang: "ar" | "en") => void; // Optional if you don't need setLang
};

// Helper function to safely access localStorage
const getDefaultLang = (): "ar" | "en" => {
  if (typeof window !== "undefined") {
    return (localStorage.getItem("lang") as "ar" | "en") || "en";
  }
  return "en"; // Default to 'en' if on the server
};

const useLanguageStore = create<LanguageState>((set) => ({
  lang: getDefaultLang(), // Use the helper function
  setLang: (newLang) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", newLang);
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = newLang;
    }
    set({ lang: newLang });
  },
}));

export default useLanguageStore;
