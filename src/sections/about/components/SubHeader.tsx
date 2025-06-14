import type { subHeader } from "../about.types";

export default function SubHeader({ icon: Icon, title }: subHeader) {
  return (
    <div className="relative inline-flex items-center mb-4">
      <div className="absolute -left-8 -top-1">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg animate-pulse-slow" />
        </div>
      </div>
      <Icon className="h-5 w-5 text-blue-500 mr-2" />
      <h3 className="text-2xl font-semibold text-foreground gradient-text">
        {title}
      </h3>
    </div>
  );
}
