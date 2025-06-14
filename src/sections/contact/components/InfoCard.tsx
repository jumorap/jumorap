import { cn } from "@/lib/utils";
import CardHeader from "./CardHeader";
import type { infoCard } from "../contact.types";

export default function InfoCard({
  icon: Icon,
  color,
  title,
  children,
  gradient,
}: infoCard) {
  return (
    <div
      className={cn(
        "p-6 rounded-xl mb-6 relative",
        "glass-card backdrop-blur-md border border-purple-500/20",
        "shadow-lg shadow-purple-500/10 dark:shadow-primary/5",
        "transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:rotate-1",
      )}
    >
      <div
        className={`absolute -top-4 -right-4 w-16 h-16 bg-${color}/10 rounded-full blur-xl animate-pulse-glow`}
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse-glow"
        style={{ animationDelay: "0.9s" }}
      />
      <div
        className="absolute top-1/2 right-0 w-12 h-12 bg-pink-500/10 rounded-full blur-xl animate-pulse-glow"
        style={{ animationDelay: "1.4s" }}
      />
      <CardHeader icon={Icon} color={color}>
        {title}
      </CardHeader>
      <div
        className={`h-0.5 w-16 ${gradient} mb-6 rounded-full animate-shimmer`}
      />
      {children}
    </div>
  );
}
