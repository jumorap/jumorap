import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FolderGit2 } from "lucide-react";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { containerVariants, itemVariants } from "./styles/projects";
import { useTranslation } from "react-i18next";
import { resume } from "@/data/resume";

export function Projects() {
  const { t } = useTranslation();
  const projects = resume(t).projects;

  return (
    <section id="projects" className="py-10 px-4 relative overflow-hidden">
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
            <FolderGit2 className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text animate-pulse-glow">
              {t("projects.title")}
            </h2>
          </div>
          <div className="h-1.5 w-40 bg-gradient-to-r from-primary/80 via-blue-500/80 to-purple-500/80 mx-auto rounded-full animate-shimmer" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className={cn(
                "group p-6 rounded-xl h-full flex flex-col",
                "bg-background/20 backdrop-blur-xl",
                "shadow-lg dark:shadow-primary/10 hover:shadow-xl transition-all duration-500",
                "before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-tr before:from-primary/50 before:via-blue-500/50 before:to-purple-500/50 before:opacity-30 before:-z-10",
                "after:absolute after:inset-[1px] after:rounded-xl after:bg-background/80 after:-z-10",
                "hover:-translate-y-1 hover:rotate-[0.5deg]",
              )}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {project.icon}
                </div>

                <div className="flex gap-2">
                  {project.links.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "p-2 rounded-lg bg-background/50 text-muted-foreground",
                        "border border-border/50 hover:text-primary hover:border-primary/30",
                        "transition-colors duration-300",
                      )}
                      whileHover={{ scale: 1.1 }}
                      title={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/30">
                {project.technologies.map((tech, index) => {
                  // Alternate colors based on index
                  const colorClasses = [
                    "bg-primary/10 text-primary border-primary/20",
                    "bg-blue-500/10 text-blue-500 border-blue-500/20",
                    "bg-purple-500/10 text-purple-500 border-purple-500/20",
                  ];
                  const colorClass = colorClasses[index % colorClasses.length];

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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
