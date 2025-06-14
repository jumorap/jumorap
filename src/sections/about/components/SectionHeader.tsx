import type { sectionHeader } from "../about.types";

export default function SectionHeader({ icon: Icon, title }: sectionHeader) {
  return (
    <div className="relative inline-flex items-center justify-center mb-4 mt-4">
      <div className="absolute -left-8 -top-1">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-slow" />
        </div>
      </div>
      <Icon className="h-6 w-6 text-primary mr-2" />
      <h2 className="text-3xl md:text-4xl font-bold gradient-text animate-pulse-glow">
        {title}
      </h2>
    </div>
  );
}
