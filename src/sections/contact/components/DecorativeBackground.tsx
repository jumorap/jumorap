import { AnimatedGradient } from "@/components/ui/animated-gradient";

export default function DecorativeBackground() {
  return (
    <>
      <AnimatedGradient
        className="absolute inset-0 z-0"
        intensity="medium"
        speed="slow"
        colors={["from-primary/10", "via-blue-500/15", "to-purple-500/10"]}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </AnimatedGradient>
      <div className="absolute -bottom-32 -left-32 w-100 h-100 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-2xl animate-pulse-glow" />
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-bl from-blue-400/20 via-purple-500/20 to-pink-400/20 rounded-full blur-2xl animate-pulse-glow" />
      <div
        className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float"
        style={{ animationDelay: "0.7s" }}
      />
      <div
        className="absolute top-2/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-float"
        style={{ animationDelay: "0.3s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float"
        style={{ animationDelay: "1.8s" }}
      />
      <div className="absolute top-1/2 left-0 w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse-glow" />
      <div
        className="absolute top-1/3 right-0 w-16 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent animate-pulse-glow"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-1/3 left-0 w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-16 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
    </>
  );
}
