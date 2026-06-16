"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function FloatingWhatsApp() {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.querySelector(".olhar-hero");
    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) =>
        setHeroVisible(entry.isIntersecting && entry.intersectionRatio > 0.28),
      { threshold: [0, 0.28, 0.6] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={site.whatsappUrl}
      className={`floating-whatsapp${heroVisible ? " is-hidden-on-hero" : ""}`}
      aria-label="Chamar a Óticas Olhar no WhatsApp"
      aria-hidden={heroVisible}
      tabIndex={heroVisible ? -1 : undefined}
    >
      <MessageCircle size={17} aria-hidden="true" />
      <span>Falar com a Óticas Olhar</span>
    </a>
  );
}
