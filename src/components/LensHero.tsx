"use client";

import Image from "next/image";
import { Glasses, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildWhatsAppUrl, media, site } from "@/lib/site";

const framesMessage =
  "Olá! Vim pelo site da Óticas Olhar e quero ver opções de armações.";

const heroVideoPlaylist = [
  media.heroVideo,
  media.experienceVideo,
  // Add new hero videos here when they are available in /public/videos/oticas-olhar/.
  "/galeria%20cole%C3%A7%C3%A3o/Tem%20%C3%B3culos%20que%20complementam%E2%80%A6%20e%20tem%20%C3%B3culos%20que%20dominam%20a%20cena.A%20lente%20espelhada%20traz%20esse%20efeito%20.mp4",
];

export function LensHero() {
  const [videoIndex, setVideoIndex] = useState(0);
  const [isVideoFading, setIsVideoFading] = useState(false);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeVideo = heroVideoPlaylist[videoIndex] ?? media.heroVideo;

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  function handleVideoEnded() {
    if (heroVideoPlaylist.length <= 1) {
      return;
    }

    setIsVideoFading(true);

    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
    }

    fadeTimeoutRef.current = setTimeout(() => {
      setVideoIndex((current) => (current + 1) % heroVideoPlaylist.length);
      setIsVideoFading(false);
    }, 180);
  }

  return (
    <section className="olhar-hero" aria-labelledby="hero-title">
      <div className="site-shell olhar-hero-grid">
        <AnimatedReveal className="olhar-hero-copy">
          <Image
            src={site.logoIcon}
            width={154}
            height={154}
            alt="Óticas Olhar GLC"
            priority
            className="olhar-hero-logo"
          />
          <p className="eyebrow">Ótica boutique em Araguaína</p>
          <h1 id="hero-title">Sua visão merece uma experiência à altura.</h1>
          <p>
            Na Óticas Olhar, você encontra armações, óculos de sol e lentes com
            atendimento próximo, ambiente confortável e orientação clara para
            escolher com segurança.
          </p>

          <div className="hero-actions olhar-hero-actions">
            <a
              href={site.whatsappUrl}
              className="button button-red"
              aria-label="Agendar atendimento pelo WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Agendar atendimento
            </a>
            <a
              href={buildWhatsAppUrl(framesMessage)}
              className="button button-ghost"
              aria-label="Ver opções de armações pelo WhatsApp"
            >
              <Glasses size={18} aria-hidden="true" />
              Ver opções de armações
            </a>
          </div>
        </AnimatedReveal>

        <AnimatedReveal className="olhar-hero-visual" delay={0.12}>
          <div className="olhar-hero-media">
            <video
              key={activeVideo}
              src={activeVideo}
              poster={media.heroPoster}
              className={`olhar-hero-video${isVideoFading ? " is-fading" : ""}`}
              muted
              loop={heroVideoPlaylist.length === 1}
              playsInline
              autoPlay
              controls={false}
              preload="metadata"
              onEnded={handleVideoEnded}
              aria-label="Vídeo de armações e vitrine da Óticas Olhar"
            />
            <span className="lens-sweep" aria-hidden="true" />
          </div>
          <div className="olhar-hero-note">
            <Sparkles size={18} aria-hidden="true" />
            <span>Armações, solares e lentes com orientação clara.</span>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
