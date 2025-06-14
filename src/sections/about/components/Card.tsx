import { cn } from "@/lib/utils";
import type { aboutCard } from "../about.types";
import { Decorative } from "@/components/decorative/Decorative";

export default function AboutCard({
  icon: Icon,
  title,
  description,
  color,
  delay,
}: aboutCard) {
  return (
    <div
      className={cn(
        "p-6 rounded-xl relative overflow-hidden",
        "bg-background/20 backdrop-blur-lg",
        "shadow-sm hover:shadow-md transition-all duration-300",
        "transform hover:-translate-y-1 hover:rotate-[0.5deg]",
        `before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-r before:from-${color}/50 before:to-${color}/50 before:opacity-30 before:-z-10`,
        "after:absolute after:inset-[1px] after:rounded-xl after:bg-background/80 after:-z-10",
      )}
    >
      <Decorative />
      <div className="relative">
        <div className="flex items-center mb-3">
          <Icon className={cn("h-5 w-5", `text-${color} mr-2`, delay)} />
          <h4 className="text-lg font-medium text-foreground gradient-text">
            {title}
          </h4>
        </div>
        <div
          className={cn(
            "h-0.5 w-12 bg-gradient-to-r rounded-full mb-3 animate-shimmer",
            color === "primary"
              ? "from-primary/80 to-blue-500/80"
              : color === "blue-500"
                ? "from-blue-500/80 to-purple-500/80"
                : color === "purple-500"
                  ? "from-purple-500/80 to-primary/80"
                  : "from-primary/80 to-purple-500/80",
          )}
        />
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
