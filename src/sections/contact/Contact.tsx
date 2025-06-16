import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Globe, Mail, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { resume } from "@/data/resume";
import Cookies from "js-cookie";
import {
  ContactForm,
  DecorativeBackground,
  InfoCard,
  SectionHeader,
} from "./components";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init(PUBLIC_KEY);

export function Contact() {
  const { t } = useTranslation();
  const socialLinks = resume(t).socialLinks;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasRecentlySent, setHasRecentlySent] = useState(false);

  useEffect(() => {
    const emailSentCookie = Cookies.get("emailSent");
    if (emailSentCookie) {
      setHasRecentlySent(true);
      setIsSubmitted(true);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handleSubmit called");

    if (hasRecentlySent) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const templateParams = {
        name: formState.name,
        email: formState.email,
        message: formState.message,
        from_email: formState.email,
        reply_to: formState.email,
      };

      console.log("Sending email with params:", templateParams);
      console.log("Using SERVICE_ID:", SERVICE_ID);
      console.log("Using TEMPLATE_ID:", TEMPLATE_ID);

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then((result) => {
          console.log("Email sent successfully:", result.text);
          setIsSubmitting(false);
          setIsSubmitted(true);
          setHasRecentlySent(true);
          setFormState({ name: "", email: "", message: "" });

          Cookies.set("emailSent", "true", { expires: 1 }); // 1 day
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setIsSubmitting(false);
          setError(t("contact.error"));
        });
    } catch (error) {
      console.error("Exception in email sending:", error);
      setIsSubmitting(false);
      setError(t("contact.error"));
    }
  };

  let successMessage: React.ReactNode = null;
  if (hasRecentlySent) {
    successMessage = (
      <>
        <span className="text-foreground">{t("contact.thanks")}</span>{" "}
        {t("contact.forContacting")}. {t("contact.willReply")}{" "}
        <span className="text-blue-500 dark:text-blue-400">
          {t("contact.asSoonAsPossible")}
        </span>
        .
        <br />
        <span className="text-amber-500 mt-8 block text-lg">
          {t("contact.alreadySent")}
        </span>
      </>
    );
  }

  return (
    <section id="contact" className="py-10 px-4 relative overflow-hidden">
      <DecorativeBackground />
      <div className="container max-w-5xl mx-auto z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader icon={Mail} title={t("contact.title")} />
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-shimmer" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm
            t={t}
            formState={formState}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
            error={error}
            hasRecentlySent={hasRecentlySent}
            successMessage={successMessage}
          />
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <InfoCard
              icon={Globe}
              color="purple-500"
              title={t("contact.letsConnect")}
              gradient="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
            >
              <p className="text-muted-foreground mb-8">
                {t("contact.doYouHave")}{" "}
                <span className="text-primary font-medium">
                  {t("contact.interestingProject")}
                </span>{" "}
                {t("contact.or")}{" "}
                <span className="text-primary font-medium">
                  {t("contact.jobOpportunity")}
                </span>
                ? {t("contact.wouldLoveToHear")} {t("contact.canContactMe")}{" "}
                <span className="text-primary font-medium">
                  {t("contact.socialProfiles")}
                </span>
                .
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-md relative",
                      "glass-card backdrop-blur-sm",
                      "border-0 before:absolute before:inset-0 before:rounded-md before:p-[1px]",
                      index === 0
                        ? "before:bg-gradient-to-r before:from-blue-500/30 before:to-purple-500/30 before:-z-10"
                        : index === 1
                          ? "before:bg-gradient-to-r before:from-purple-500/30 before:to-pink-500/30 before:-z-10"
                          : "before:bg-gradient-to-r before:from-pink-500/30 before:to-blue-500/30 before:-z-10",
                      "after:absolute after:inset-[1px] after:rounded-md after:bg-background/80 after:-z-10",
                      index === 0
                        ? "text-blue-500"
                        : index === 1
                          ? "text-purple-500"
                          : "text-pink-500",
                      "shadow-md hover:shadow-lg",
                      index === 0
                        ? "hover:shadow-blue-500/20"
                        : index === 1
                          ? "hover:shadow-purple-500/20"
                          : "hover:shadow-pink-500/20",
                      "transition-all duration-300",
                    )}
                  >
                    <div
                      className={cn(
                        "absolute -z-10 w-8 h-8 rounded-full blur-md animate-pulse-glow",
                        index === 0
                          ? "bg-blue-500/10 -top-2 -left-2"
                          : index === 1
                            ? "bg-purple-500/10 -bottom-2 -right-2"
                            : "bg-pink-500/10 -top-2 -right-2",
                      )}
                      style={{ animationDelay: `${0.3 * (index + 1)}s` }}
                    />
                    <span className="relative">{link.icon}</span>
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </InfoCard>
            <InfoCard
              icon={ArrowRight}
              color="blue-500"
              title={t("contact.readyToCollaborate")}
              gradient="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            >
              <p className="text-foreground/80">
                {t("contact.imOpenTo")}{" "}
                <span className="text-primary font-medium">
                  {t("contact.remoteWork")}
                </span>
                ,{" "}
                <span className="text-primary font-medium">
                  {t("contact.projectCollaborations")}
                </span>{" "}
                {t("contact.and")}{" "}
                <span className="text-primary font-medium">
                  {t("contact.technicalConsulting")}
                </span>
                . {t("contact.myFocus")}
              </p>
            </InfoCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
