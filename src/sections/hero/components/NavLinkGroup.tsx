import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import type { NavLinkProps, NavLinkGroupProps } from "./../hero.types";

const headerHeight = 60;

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: "smooth",
    });
  }
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  labelKey,
  shadowColor,
  ariaLabel,
}) => {
  const { t } = useTranslation();

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(href);
      }}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md",
        "glass-card text-foreground shadow-sm",
        `hover:shadow-${shadowColor}/20 hover:shadow-lg border-${shadowColor}/20`,
        "transition-all duration-300 ease-in-out transform hover:-translate-y-1",
      )}
      aria-label={ariaLabel}
    >
      {t(labelKey)}
    </a>
  );
};

const NavLinkGroup: React.FC<NavLinkGroupProps> = ({ itemVariants }) => {
  return (
    <motion.div
      className="flex flex-wrap gap-4 justify-center mb-8"
      variants={itemVariants}
    >
      <NavLink
        href="#about"
        labelKey="nav.about"
        shadowColor="blue-500"
        ariaLabel="About Juan Mora"
      />
      <NavLink
        href="#skills"
        labelKey="nav.skills"
        shadowColor="purple-500"
        ariaLabel="Juan Mora's Skills"
      />
      <NavLink
        href="#experience"
        labelKey="nav.experience"
        shadowColor="pink-500"
        ariaLabel="Juan Mora's Experience"
      />
    </motion.div>
  );
};

export default NavLinkGroup;
