export default function DecorativeCircles() {
  return (
    <>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/50 rounded-full animate-float" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-500/50 rounded-full animate-float animation-delay-1000" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/50 rounded-full animate-float animation-delay-2000" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
    </>
  );
}
