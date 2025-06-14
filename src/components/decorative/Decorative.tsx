export function Decorative() {
  return (
    <>
      <div
        className="absolute w-12 h-12 bg-primary/20 rounded-full blur-lg animate-pulse-glow"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
      <div
        className="absolute bottom-5 left-5 w-16 h-16 bg-blue-500/20 rounded-full blur-lg animate-pulse-glow animation-delay-1000"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
      <div
        className="absolute w-16 h-16 bg-purple-500/20 rounded-full blur-lg animate-pulse-glow"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    </>
  );
}
