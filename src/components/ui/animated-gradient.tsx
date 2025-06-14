import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type AnimatedGradientProps = {
  className?: string;
  children: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
  speed?: "slow" | "medium" | "fast";
  colors?: string[];
  interactive?: boolean;
};

export function AnimatedGradient({
  className,
  children,
  intensity = "medium",
  speed = "medium",
  colors = ["from-primary/20", "via-blue-500/20", "to-purple-500/20"],
  interactive = true,
}: AnimatedGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  // Configurar intensidad
  const intensityMap = {
    subtle: "opacity-10",
    medium: "opacity-20",
    strong: "opacity-30",
  };

  // Configurar velocidad
  const speedMap = {
    slow: 20,
    medium: 12,
    fast: 8,
  };

  // Efecto de seguimiento del cursor si es interactivo
  useEffect(() => {
    if (!interactive || !containerRef.current || !gradientRef.current) return;

    const container = containerRef.current;
    const gradient = gradientRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calcular posición relativa (0-100%)
      const posX = (x / rect.width) * 100;
      const posY = (y / rect.height) * 100;

      // Aplicar transformación con un ligero retraso para efecto suave
      gradient.style.transform = `translate(-50%, -50%) translate(${posX}%, ${posY}%)`;
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      {/* Fondo animado */}
      <motion.div
        ref={gradientRef}
        className={cn(
          "absolute -inset-[100%] blur-3xl rounded-full",
          intensityMap[intensity],
          "bg-gradient-to-r",
          ...colors,
        )}
        animate={{
          x: ["0%", "100%", "0%"],
          y: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: speedMap[speed],
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
