import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements =
      document.querySelectorAll<HTMLElement>(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          const anim = el.getAttribute("data-anim");

          switch (anim) {
            case "slide-left":
              el.style.animation = "var(--animate-slide-in-left)";
              break;
            case "slide-right":
              el.style.animation = "var(--animate-slide-in-right)";
              break;
            default:
              el.style.animation = "var(--animate-fade-in)";
          }

          el.style.opacity = "1";
          observer.unobserve(el);
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
