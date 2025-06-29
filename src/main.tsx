import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import i18n from "./i18n/i18n";

function setHtmlLang(lang: string) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }
}

function handleLanguageParam() {
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang");

    if (langParam && (langParam === "es" || langParam === "en")) {
      if (i18n.language !== langParam) i18n.changeLanguage(langParam);
      localStorage.setItem("i18nextLng", langParam);
    } else {
      const savedLang = localStorage.getItem("i18nextLng");
      if (savedLang && (savedLang === "es" || savedLang === "en")) {
        if (
          window.location.pathname === "/" &&
          savedLang === "es" &&
          !window.location.search.includes("lang=")
        ) {
          const newUrl = `${window.location.origin}${window.location.pathname}?lang=es`;
          window.location.href = newUrl;
          return;
        }

        if (i18n.language !== savedLang) {
          i18n.changeLanguage(savedLang);
        }
      }
    }
  }
}

handleLanguageParam();
setHtmlLang(i18n.language);
i18n.on("languageChanged", setHtmlLang);
if (
  typeof window !== "undefined" &&
  !window.location.href.includes("redirecting")
) {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
