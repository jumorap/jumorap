import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Send, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { containerVariants, itemVariants } from "../contact.styles";
import CardHeader from "./CardHeader";
import type { contactForm } from "../contact.types";

export default function ContactForm({
  t,
  formState,
  handleChange,
  handleSubmit,
  isSubmitting,
  isSubmitted,
  //  setIsSubmitted,
  error,
  formRef,
  successMessage,
}: contactForm) {
  return (
    <motion.div
      className={cn(
        "p-6 rounded-xl",
        "glass-card backdrop-blur-md border border-blue-500/20",
        "shadow-lg shadow-blue-500/10 dark:shadow-primary/5",
        "transition-all duration-300 ease-in-out transform",
      )}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse-glow"
        style={{ animationDelay: "0.3s" }}
      />
      <div
        className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse-glow"
        style={{ animationDelay: "0.7s" }}
      />
      <div
        className="absolute top-1/2 right-0 w-12 h-12 bg-pink-500/10 rounded-full blur-xl animate-pulse-glow"
        style={{ animationDelay: "1.2s" }}
      />
      <CardHeader icon={Mail} color="blue-500">
        {t("contact.sendMessage")}
      </CardHeader>
      <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 rounded-full animate-shimmer" />
      {isSubmitted ? (
        <motion.div
          className="flex flex-col items-center justify-center py-8 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse-slow" />
            <CheckCircle className="h-16 w-16 text-green-500 relative z-10" />
          </div>
          <h4 className="text-xl font-medium mb-2 gradient-text">
            {t("contact.messageSent")}
          </h4>
          <p className="text-muted-foreground mb-6">
            {successMessage || (
              <>
                <span className="text-foreground">{t("contact.thanks")}</span>{" "}
                {t("contact.forContacting")}. {t("contact.willReply")}{" "}
                <span className="text-blue-500 dark:text-blue-400">
                  {t("contact.asSoonAsPossible")}
                </span>
                .
              </>
            )}
          </p>
        </motion.div>
      ) : (
        <form
          ref={formRef}
          onSubmit={(e) => {
            console.log("Form submitted");
            handleSubmit(e);
          }}
        >
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-md flex items-center gap-2 text-red-500">
              <AlertCircle className="h-5 w-5" />
              <span>{error}</span>
            </div>
          )}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t("contact.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className={cn(
                  "w-full px-4 py-2 rounded-md",
                  "glass-card relative backdrop-blur-sm",
                  "border-0 before:absolute before:inset-0 before:rounded-md before:p-[1px] before:bg-gradient-to-r before:from-blue-500/30 before:via-purple-500/30 before:to-pink-500/30 before:-z-10",
                  "after:absolute after:inset-[1px] after:rounded-md after:bg-background/80 after:-z-10",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500/30",
                  "placeholder:text-foreground/50",
                  "transition-all duration-300 hover:shadow-md hover:shadow-blue-500/5",
                )}
                placeholder={t("contact.yourName")}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t("contact.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className={cn(
                  "w-full px-4 py-2 rounded-md",
                  "glass-card relative backdrop-blur-sm",
                  "border-0 before:absolute before:inset-0 before:rounded-md before:p-[1px] before:bg-gradient-to-r before:from-purple-500/30 before:via-pink-500/30 before:to-blue-500/30 before:-z-10",
                  "after:absolute after:inset-[1px] after:rounded-md after:bg-background/80 after:-z-10",
                  "focus:outline-none focus:ring-2 focus:ring-purple-500/30",
                  "placeholder:text-foreground/50",
                  "transition-all duration-300 hover:shadow-md hover:shadow-purple-500/5",
                )}
                placeholder={t("contact.yourEmail")}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className={cn(
                  "w-full px-4 py-2 rounded-md h-32",
                  "glass-card relative backdrop-blur-sm",
                  "border-0 before:absolute before:inset-0 before:rounded-md before:p-[1px] before:bg-gradient-to-r before:from-pink-500/30 before:via-blue-500/30 before:to-purple-500/30 before:-z-10",
                  "after:absolute after:inset-[1px] after:rounded-md after:bg-background/80 after:-z-10",
                  "focus:outline-none focus:ring-2 focus:ring-pink-500/30",
                  "placeholder:text-foreground/50 resize-none",
                  "transition-all duration-300 hover:shadow-md hover:shadow-pink-500/5",
                )}
                placeholder={t("contact.yourMessage")}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className={cn(
                  "w-full px-6 py-3 rounded-md",
                  "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
                  "shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 hover:shadow-xl",
                  "transition-all duration-300 ease-in-out transform hover:-translate-y-1",
                  "flex items-center justify-center gap-2 relative overflow-hidden",
                  isSubmitting && "opacity-70 cursor-not-allowed",
                )}
                disabled={isSubmitting}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left" />
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
                    {t("contact.sending")}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>{t("contact.sendMessage")}</span>
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>
        </form>
      )}
    </motion.div>
  );
}
