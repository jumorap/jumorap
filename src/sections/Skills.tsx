import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Lightbulb } from "lucide-react";
import { containerVariants } from "./styles/skills";
import { Decorative } from "@/components/decorative/Decorative";
import { useTranslation } from "react-i18next";
import { resume } from "@/data/resume";

export function Skills() {
  const { t } = useTranslation();
  const skillCategories = resume(t).skills;

  return (
    <section id="skills" className="py-10 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-0" />

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
            <Lightbulb className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text animate-pulse-glow">
              {t("skills.title")}
            </h2>
          </div>
          <div className="h-1.5 w-40 bg-gradient-to-r from-primary/80 via-blue-500/80 to-purple-500/80 mx-auto rounded-full animate-shimmer" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className={cn(
                "p-6 rounded-xl relative overflow-hidden",
                "bg-background/20 backdrop-blur-xl",
                "shadow-lg dark:shadow-primary/10 hover:shadow-xl transition-all duration-500",
                "before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-tr before:from-primary/50 before:via-blue-500/50 before:to-purple-500/50 before:opacity-30 before:-z-10",
                "after:absolute after:inset-[1px] after:rounded-xl after:bg-background/80 after:-z-10",
                "hover:-translate-y-1 hover:rotate-[0.5deg]",
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4 ">
                <div className="relative mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                </div>
                {/* Decorative blurred circles */}
                <Decorative />

                <div className="relative">
                  <h3 className="text-xl font-semibold mb-2 gradient-text">
                    {category.name}
                  </h3>
                  <div className="h-0.5 w-20 bg-gradient-to-r from-primary/80 to-blue-500/80 rounded-full mb-4 animate-shimmer" />
                </div>
              </div>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.key}
                    className={`px-3 py-2 rounded-lg border backdrop-blur-sm shadow-sm flex items-center gap-2 ${
                      index % 3 === 0
                        ? "bg-primary/10 text-primary border-primary/20"
                        : index % 3 === 1
                          ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                          : "bg-purple-500/10 text-purple-500 border-purple-500/20"
                    }`}
                  >
                    <span>{t(skill.name)}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
