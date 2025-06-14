import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BookMarked } from "lucide-react";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { containerVariants, itemVariants } from "./styles/education";
import { useTranslation } from "react-i18next";
import { resume } from "@/data/resume";

export function Education() {
  const { t } = useTranslation();
  const educationItems = resume(t).education;

  return (
    <section id="education" className="py-10 px-4 relative overflow-hidden">
      <AnimatedGradient
        className="absolute inset-0 z-0"
        intensity="medium"
        speed="slow"
        colors={["from-primary/10", "via-blue-500/15", "to-purple-500/10"]}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </AnimatedGradient>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/50 rounded-full animate-float" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-500/50 rounded-full animate-float animation-delay-1000" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/50 rounded-full animate-float animation-delay-2000" />

      {/* Gradient lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />

      <div className="container max-w-5xl mx-auto z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-flex items-center justify-center mb-4">
            <div className="absolute -left-8 -top-1">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-slow" />
              </div>
            </div>
            <BookMarked className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text animate-pulse-glow">
              {t("education.title")}
            </h2>
          </div>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary/80 via-blue-500/80 to-purple-500/80 mx-auto rounded-full animate-shimmer" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationItems.map((item) => (
            <motion.div
              key={item.key}
              className={cn(
                "p-6 rounded-xl relative overflow-hidden",
                "bg-background/20 backdrop-blur-xl",
                "shadow-lg dark:shadow-primary/10 hover:shadow-xl transition-all duration-500",
                "before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-tr before:from-primary/50 before:via-blue-500/50 before:to-purple-500/50 before:opacity-30 before:-z-10",
                "after:absolute after:inset-[1px] after:rounded-xl after:bg-background/80 after:-z-10",
                "hover:-translate-y-1 hover:rotate-[0.5deg]",
              )}
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-primary/30 to-blue-500/30 flex items-center justify-center text-primary border border-white/10 shadow-lg animate-pulse-slow">
                    <div className="absolute inset-0 rounded-full blur-md bg-primary/0 animate-pulse-glow" />
                    <div className="relative z-10">{item.icon}</div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold gradient-text">
                      {item.institution}
                    </h3>
                    <motion.span
                      className="text-sm backdrop-blur-sm px-3 py-1 inline-flex items-center justify-center"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {item.period}
                    </motion.span>
                  </div>
                  <div className="h-0.5 w-20 bg-gradient-to-r from-primary/80 to-blue-500/80 rounded-full mb-3 animate-shimmer" />
                  <h4 className="text-lg font-medium gradient-text mb-3">
                    {item.degree}
                  </h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
