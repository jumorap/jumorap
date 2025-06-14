import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Briefcase, ExternalLink } from "lucide-react";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { containerVariants, itemVariants } from "./styles/experience";
import { Decorative } from "@/components/decorative/Decorative";
import { useTranslation } from "react-i18next";
import { resume } from "@/data/resume";

export function Experience() {
  const { t } = useTranslation();
  const experiences = resume(t).experience;

  return (
    <section id="experience" className="py-10 px-4 relative overflow-hidden">
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
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
            <Briefcase className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text animate-pulse-glow">
              {t("experience.title")}
            </h2>
          </div>
          <div className="h-1.5 w-40 bg-gradient-to-r from-primary/80 via-blue-500/80 to-purple-500/80 mx-auto rounded-full animate-shimmer" />
        </motion.div>

        <motion.div
          className="relative pl-8 md:pl-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-1/2 md:-ml-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={cn(
                "relative mb-12 md:flex",
                index % 2 === 0 ? "md:flex-row-reverse" : "",
              )}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div
                className={cn(
                  "absolute left-0 w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center",
                  "border-4 border-background shadow-lg",
                  "md:left-1/2 md:-ml-4",
                  "animate-pulse-slow",
                )}
              >
                <div className="absolute inset-0 rounded-full blur-md bg-primary/20 animate-pulse-glow" />
                <div className="relative z-10">
                  <Briefcase className="h-3 w-3 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div
                className={cn(
                  "md:w-1/2",
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12",
                )}
              >
                <div
                  className={cn(
                    "p-6 rounded-xl relative overflow-hidden",
                    "bg-background/20 backdrop-blur-xl",
                    "shadow-lg dark:shadow-primary/10 hover:shadow-xl transition-all duration-500",
                    "before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-tr before:from-primary/50 before:via-blue-500/50 before:to-purple-500/50 before:opacity-30 before:-z-10",
                    "after:absolute after:inset-[1px] after:rounded-xl after:bg-background/80 after:-z-10",
                    "hover:-translate-y-1 hover:rotate-[0.5deg]",
                  )}
                >
                  {/* Decorative blurred circles */}
                  <Decorative />

                  <div className="relative">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center">
                        {exp.icon}
                        <h3 className="text-xl font-semibold gradient-text">
                          {exp.position}
                        </h3>
                      </div>
                      <span className="text-sm px-3 py-1 inline-flex items-center justify-center">
                        {exp.period}
                      </span>
                    </div>

                    <div className="h-0.5 w-20 bg-gradient-to-r from-primary/80 to-blue-500/80 rounded-full mb-3 animate-shimmer" />

                    <h4 className="text-lg font-medium gradient-text mb-3">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.company}
                        {exp.link && exp.link !== "#" && (
                          <span className="ml-2 text-primary">
                            <ExternalLink className="h-4 w-4 inline-block mb-2" />
                          </span>
                        )}
                      </a>
                    </h4>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => {
                        // Alternate colors based on index
                        const colorClasses = [
                          "bg-primary/10 text-primary border-primary/20",
                          "bg-blue-500/10 text-blue-500 border-blue-500/20",
                          "bg-purple-500/10 text-purple-500 border-purple-500/20",
                        ];
                        const colorClass =
                          colorClasses[index % colorClasses.length];

                        return (
                          <motion.span
                            key={tech}
                            className={`px-2 py-1 text-xs rounded-full ${colorClass} border backdrop-blur-sm shadow-sm`}
                          >
                            {tech}
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
