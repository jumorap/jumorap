import type { TFunction } from "i18next";

export type contactForm = {
  t: TFunction;
  formState: {
    name: string;
    email: string;
    message: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  isSubmitted: boolean;
  setIsSubmitted: (isSubmitted: boolean) => void;
};

export type cardHeader = {
  icon: React.ElementType;
  color: string;
  children: React.ReactNode;
};

export type infoCard = {
  icon: React.ElementType;
  color: string;
  title: string;
  children: React.ReactNode;
  gradient: string;
};

export type sectionHeader = {
  icon: React.ElementType;
  title: string;
};
