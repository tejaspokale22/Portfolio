"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ANIMATION_DURATION = 200;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      setMounted(true);
      return;
    }
    const t = setTimeout(() => setMounted(false), ANIMATION_DURATION);
    return () => clearTimeout(t);
  }, [isVisible]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <div
      onClick={handleScrollToTop}
      aria-label="Scroll to Top"
      title="Scroll to Top"
      className={[
        "fixed bottom-6 right-6 z-50 p-5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "bg-black/10 dark:bg-white/15 hover:bg-black/15 dark:hover:bg-white/20",
        "flex items-center justify-center cursor-pointer",
        "transform transition-all duration-200 ease-out motion-reduce:transition-none",
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-3 scale-95 pointer-events-none",
      ].join(" ")}
    >
      <ChevronUp size={22} className="text-black dark:text-white" />
    </div>
  );
}
