import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Menu, X, ChevronUp } from "lucide-react";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { useTheme } from "@/components/theme-provider";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

type LayoutProps = {
  children: React.ReactNode;
};

type NavItem = {
  label: string;
  href: string;
};

const getNavItems = (t: TFunction): NavItem[] => [
  { label: t("nav.home"), href: "#" },
  { label: t("nav.about"), href: "#about" },
  { label: t("nav.skills"), href: "#skills" },
  { label: t("nav.experience"), href: "#experience" },
  { label: t("nav.education"), href: "#education" },
  { label: t("nav.projects"), href: "#projects" },
  { label: t("nav.contact"), href: "#contact" },
];

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation();
  const navItems = getNavItems(t);

  // Detectar scroll para cambiar estilos del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    setTimeout(() => {
      const element =
        href === "#" ? document.body : document.querySelector(href);
      if (element) {
        // Calcular la posición del elemento
        const headerHeight = 40; // Altura aproximada del header
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;

        // Desplazarse a la posición con offset para el header
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Definir colores de partículas según el tema
  const particleColors =
    theme === "dark"
      ? ["#ffffff", "#88ccff", "#8866ff"]
      : ["#333333", "#0066cc", "#6633cc"];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Fondo de partículas */}
      <ParticlesBackground
        quantity={50}
        speed={0.3}
        density="medium"
        colors={particleColors}
      />
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-lg shadow-md"
            : "py-5 bg-transparent",
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
          >
            Juan Mora
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                  "hover:bg-primary/10 hover:text-primary",
                )}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <div className="ml-2 flex items-center space-x-2">
              <LanguageToggle />
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <LanguageToggle />
            <ModeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2 rounded-md text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              style={{
                background: "transparent",
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={12} /> : <Menu size={12} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50"
            >
              <div className="container max-w-7xl mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item, i) => (
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200",
                        "hover:bg-primary/10 hover:text-primary",
                      )}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-background/30 backdrop-blur-sm border-t border-border/50 py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Jumorap | Juan Mora.{" "}
                {t("footer.rights")}
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jumorap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jumorap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://jumorap.astraty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t("footer.portfolio")}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className={cn(
              "fixed bottom-6 right-6 p-3 rounded-full z-40",
              "bg-primary shadow-lg",
              "hover:bg-primary/90 transition-colors duration-200",
            )}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} className="text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
