import { useEffect, useState, type RefObject } from "react";

type ScrollAnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

/**
 * Hook para detectar cuando un elemento es visible en el viewport y aplicar animaciones
 * @param ref - Referencia al elemento que se va a observar
 * @param options - Opciones de configuración para el IntersectionObserver
 * @returns Un objeto con el estado de visibilidad del elemento
 */
export function useScrollAnimation(
  ref: RefObject<HTMLElement>,
  options: ScrollAnimationOptions = {},
) {
  const { threshold = 0.1, rootMargin = "0px", once = true } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold, rootMargin, once]);

  return { isVisible };
}
