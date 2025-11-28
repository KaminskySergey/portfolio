import { useEffect } from "react";

export function useScrollForTextAnimation() {
    useEffect(() => {
        if (typeof window === "undefined") return;
    
        const elements = document.querySelectorAll<HTMLElement>(".animate-text-on-scroll");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
    
              const el = entry.target as HTMLElement;
              const anim = el.getAttribute("data-anim") || "fade-in";
    
              el.style.animation = `var(--animate-${anim})`;
              el.style.opacity = "1";
    
              observer.unobserve(el);
            });
          },
          { threshold: 0.3 }
        );
    
        elements.forEach((el) => observer.observe(el));
    
        return () => observer.disconnect();
      }, []);
}
