import { motion } from "framer-motion";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { cn } from "@/lib/utils";
import { User, Sparkles, Zap, Layers, Server } from "lucide-react";
import { containerVariants, itemVariants } from "./about.styles";
import { useTranslation } from "react-i18next";
import {
  AboutCard,
  DecorativeCircles,
  SectionHeader,
  SubHeader,
} from "./components";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-10 px-4 relative overflow-hidden">
      <AnimatedGradient
        className="absolute inset-0 z-0"
        intensity="medium"
        speed="slow"
        colors={["from-primary/10", "via-blue-500/15", "to-purple-500/10"]}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </AnimatedGradient>
      <DecorativeCircles />
      <div className="container max-w-5xl mx-auto z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader icon={User} title={t("about.title")} />
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary/80 via-blue-500/80 to-purple-500/80 mx-auto rounded-full animate-shimmer" />
        </motion.div>
        <motion.div
          className={cn(
            "relative p-8 md:p-10 rounded-2xl overflow-hidden",
            "bg-background/20 backdrop-blur-xl",
            "shadow-xl dark:shadow-primary/10",
            "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-tr before:from-primary/50 before:via-blue-500/50 before:to-purple-500/50 before:opacity-30 before:-z-10",
            "after:absolute after:inset-[1px] after:rounded-2xl after:bg-background/80 after:-z-10",
          )}
          variants={containerVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-500/10 z-0" />
          <div className="absolute top-5 left-5 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse-glow" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse-glow animation-delay-1000" />
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse-glow animation-delay-2000" />
          <div className="relative z-10">
            <motion.div
              className="flex flex-col md:flex-row gap-8 items-center mb-2"
              variants={itemVariants}
            >
              <div className="flex-1">
                <SubHeader icon={Sparkles} title={t("hero.role")} />
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500/80 to-purple-500/80 rounded-full mb-4 animate-shimmer" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t("about.description")}
                </p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <AboutCard
                icon={Layers}
                title={t("about.architecture")}
                description={
                  <>
                    {t("about.architectureExperience")}{" "}
                    <span className="text-primary font-medium">
                      {t("about.designAndDevelopment")}
                    </span>{" "}
                    {t("about.scalableArchitectures")}{" "}
                    <span className="text-primary font-medium">
                      {t("about.designPatterns")}
                    </span>{" "}
                    {t("about.bestPractices")}
                  </>
                }
                color="primary"
              />
              <AboutCard
                icon={Zap}
                title={t("about.automation")}
                description={
                  <>
                    {t("about.implementationOf")}{" "}
                    <span className="text-primary font-medium">
                      {t("about.automatedWorkflows")}
                    </span>{" "}
                    {t("about.forCiCd")}{" "}
                    <span className="text-primary font-medium">
                      {t("about.efficiency")}
                    </span>{" "}
                    {t("about.reducingErrors")}
                  </>
                }
                color="blue-500"
                delay="animation-delay-700"
              />
              <AboutCard
                icon={Server}
                title={t("about.highAvailability")}
                description={
                  <>
                    {t("about.designOf")}{" "}
                    <span className="text-primary font-medium">
                      {t("about.robustSystems")}
                    </span>{" "}
                    {t("about.withHighAvailability")}{" "}
                    <span className="text-primary font-medium">
                      {t("about.serviceContinuity")}
                    </span>{" "}
                    {t("about.inCriticalEnvironments")}
                  </>
                }
                color="purple-500"
                delay="animation-delay-1000"
              />
              <AboutCard
                icon={User}
                title={t("about.softSkills")}
                description={
                  <>
                    <span className="text-primary font-medium">
                      {t("about.clearCommunication")}
                    </span>
                    , {t("about.empathy")},{" "}
                    <span className="text-primary font-medium">
                      {t("about.leadership")}
                    </span>
                    , {t("about.teamwork")},{" "}
                    <span className="text-primary font-medium">
                      {t("about.adaptability")}
                    </span>
                    , {t("about.creativityAndProblemSolving")}
                  </>
                }
                color="primary"
                delay="animation-delay-1500"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
