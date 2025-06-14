import type { cardHeader } from "../contact.types";

export default function CardHeader({
  icon: Icon,
  color,
  children,
}: cardHeader) {
  return (
    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 relative">
      <span className="relative">
        <span
          className={`absolute inset-0 bg-${color}/20 blur-md rounded-full animate-pulse-slow`}
        />
        <Icon className={`h-5 w-5 text-${color} relative z-10`} />
      </span>
      <span className="gradient-text">{children}</span>
    </h3>
  );
}
