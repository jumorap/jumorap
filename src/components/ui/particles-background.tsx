import { useRef, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
};

type ParticlesBackgroundProps = {
  className?: string;
  quantity?: number;
  speed?: number;
  density?: "low" | "medium" | "high";
  interactive?: boolean;
  colors?: string[];
};

export function ParticlesBackground({
  className = "",
  quantity = 50,
  speed = 0.5,
  density = "medium",
  interactive = true,
  colors = ["#ffffff", "#88ccff", "#8866ff"],
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });
  const { theme } = useTheme();

  // Ajustar densidad
  const densityMap = {
    low: 0.5,
    medium: 1,
    high: 2,
  };

  // Inicializar partículas
  const initParticles = (canvas: HTMLCanvasElement) => {
    const adjustedQuantity = Math.floor(quantity * densityMap[density]);
    particlesRef.current = [];

    for (let i = 0; i < adjustedQuantity; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1,
      });
    }
  };

  // Actualizar y dibujar partículas
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((particle) => {
      // Actualizar posición
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Rebote en los bordes
      if (particle.x > canvas.width || particle.x < 0) {
        particle.speedX = -particle.speedX;
      }
      if (particle.y > canvas.height || particle.y < 0) {
        particle.speedY = -particle.speedY;
      }

      // Interacción con el mouse
      if (interactive) {
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRef.current.radius) {
          const angle = Math.atan2(dy, dx);
          const force =
            (mouseRef.current.radius - distance) / mouseRef.current.radius;

          particle.x += Math.cos(angle) * force * 2;
          particle.y += Math.sin(angle) * force * 2;
        }
      }

      // Dibujar partícula
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  // Ajustar tamaño del canvas
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initParticles(canvas);
  };

  // Seguimiento del mouse
  const handleMouseMove = (e: MouseEvent) => {
    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;
  };

  // Efecto para inicializar y limpiar
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Configurar canvas
    handleResize();
    window.addEventListener("resize", handleResize);

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Iniciar animación
    animate();

    // Limpiar
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [theme, density, speed, quantity, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
}
