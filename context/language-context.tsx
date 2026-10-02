"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: (es: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es")

  useEffect(() => {
    const saved = localStorage.getItem("preferred-language") as Language | null
    if (saved === "es" || saved === "en") {
      setLanguageState(saved)
    } else {
      const browserLang = typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("en") ? "en" : "es"
      setLanguageState(browserLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem("preferred-language", lang)
    } catch {}
  }

  const toggleLanguage = () => {
    const next = language === "es" ? "en" : "es"
    setLanguage(next)
  }

  const t = (es: string, en: string) => (language === "es" ? es : en)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
