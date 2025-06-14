import { useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

/**
 * Hook para aplicar efectos adicionales cuando cambia el tema
 * Útil para animaciones o cambios de estilo específicos al cambiar entre temas
 */
export function useThemeEffect() {
  const { theme } = useTheme();

  useEffect(() => {
    // Añadir una clase al body para animaciones de transición
    document.body.classList.add("theme-transition");

    // Aplicar efectos específicos según el tema
    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.style.setProperty(
        "--theme-transition-color",
        "rgba(0, 0, 0, 0.8)",
      );
    } else {
      document.documentElement.style.setProperty(
        "--theme-transition-color",
        "rgba(255, 255, 255, 0.8)",
      );
    }

    // Limpiar la clase después de la transición
    const timer = setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 300);

    return () => clearTimeout(timer);
  }, [theme]);

  return { theme };
}
