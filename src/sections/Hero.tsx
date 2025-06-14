import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { containerVariants, itemVariants } from "./styles/hero";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden">
      <AnimatedGradient
        className="absolute inset-0 z-0"
        intensity="medium"
        speed="slow"
        colors={["from-primary/10", "via-blue-500/15", "to-purple-500/10"]}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </AnimatedGradient>

      <motion.div
        className="container max-w-5xl mx-auto z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          variants={itemVariants}
        >
          <span className="gradient-text animate-pulse-glow">Juan Mora</span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-medium mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300"
          variants={itemVariants}
        >
          {t("hero.role")}
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 glass-card p-4 backdrop-blur-md border-blue-500/20 animate-shimmer"
          variants={itemVariants}
        >
          <span className="font-medium">{t("hero.leading")}</span>{" "}
          {t("hero.that")}{" "}
          <span className="text-blue-500 dark:text-blue-400">
            {t("hero.connect")}
          </span>{" "}
          {t("hero.systems")}{" "}
          <span className="text-purple-500 dark:text-purple-400">
            {t("hero.highImpact")}
          </span>
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-8"
          variants={itemVariants}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#contact");
              if (element) {
                const headerHeight = 40; // Altura aproximada del header
                const elementPosition =
                  element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementPosition - headerHeight,
                  behavior: "smooth",
                });
              }
            }}
            className={cn(
              "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md",
              "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg",
              "hover:shadow-blue-500/30 hover:shadow-xl animate-shimmer",
              "transition-all duration-300 ease-in-out transform hover:-translate-y-1",
            )}
          >
            <span className="text-white">{t("hero.cta")}</span>
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#projects");
              if (element) {
                const headerHeight = 80; // Altura aproximada del header
                const elementPosition =
                  element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementPosition - headerHeight,
                  behavior: "smooth",
                });
              }
            }}
            className={cn(
              "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md",
              "glass-card text-foreground shadow-md",
              "hover:shadow-purple-500/20 hover:shadow-xl border-purple-500/20",
              "transition-all duration-300 ease-in-out transform hover:-translate-y-1",
            )}
          >
            {t("nav.projects")}
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4"
          variants={itemVariants}
        >
          <a
            href="https://github.com/jumorap"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-110 hover:rotate-3 animate-pulse-glow"
            aria-label="GitHub"
            style={{ animationDuration: "4s" }}
          >
            <Github size={20} className="text-blue-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/jumorap"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-110 hover:rotate-3 animate-pulse-glow"
            aria-label="LinkedIn"
            style={{ animationDuration: "4s", animationDelay: "0.5s" }}
          >
            <Linkedin size={20} className="text-purple-500" />
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -bottom-32 -left-32 w-100 h-100 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-2xl animate-pulse-glow" />
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-bl from-blue-400/20 via-purple-500/20 to-pink-400/20 rounded-full blur-2xl animate-pulse-glow" />

      {/* Additional decorative elements */}
      <div
        className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1.2s" }}
      />

      {/* Floating particles */}
      <div
        className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float"
        style={{ animationDelay: "0.7s" }}
      />
      <div
        className="absolute top-2/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-float"
        style={{ animationDelay: "0.3s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float"
        style={{ animationDelay: "1.8s" }}
      />

      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse-glow" />
      <div
        className="absolute top-1/3 right-0 w-16 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent animate-pulse-glow"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-1/3 left-0 w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-16 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
    </section>
  );
}
