import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number; // how much of the element must be visible to trigger (0–1)
  once?: boolean; // trigger only once, or every time it enters viewport
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {},
) {
  const { threshold = 0.15, once = true } = options; // default to 15% visibility, trigger only once
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting) {
          setIsVisible(true);
          // if once is true, stop watching after first trigger
          if (once) observer.unobserve(element);
        } else {
          if (!once) setIsVisible(false); // reset visibility if it leaves viewport (only if not once)
        }
      },
      { threshold },
    );
    observer.observe(element);

    // cleanup — always disconnect when component unmounts
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, isVisible };
}
