import type { Variants } from "framer-motion";

export type NavLinkProps = {
  href: string;
  labelKey: string;
  shadowColor: string;
  ariaLabel: string;
};

export type NavLinkGroupProps = {
  itemVariants?: Variants;
  links?: NavLinkProps[];
};
