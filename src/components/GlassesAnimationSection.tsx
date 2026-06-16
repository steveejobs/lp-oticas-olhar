"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useState } from "react";

const PRIMARY_PHRASE =
  "\u00d3TICAS OLHAR GLC \u2022 CLAREZA PARA SUA ROTINA \u2022";
const SECONDARY_PHRASE =
  "ATENDIMENTO CUIDADOSO \u2022 ARAGUA\u00cdNA \u2022 ARMA\u00c7\u00d5ES, LENTES E \u00d3CULOS DE SOL \u2022";

const MARQUEE_DURATION = "34s";
const MARQUEE_MOBILE_DURATION = "48s";
const MARQUEE_INITIAL_X = "0%";
const MARQUEE_FINAL_X = "-50%";
const MARQUEE_FONT_SIZE = "clamp(4.1rem, 8.9vw, 8.65rem)";
const MARQUEE_SECONDARY_FONT_SIZE = "clamp(1.15rem, 2.05vw, 2.08rem)";
const MARQUEE_LETTER_SPACING = "0.055em";
const MARQUEE_GAP = "clamp(2.8rem, 5.8vw, 5.6rem)";
const MARQUEE_Y_PRIMARY = "46%";
const MARQUEE_Y_SECONDARY = "64%";
const MOBILE_FOCUS_DURATION = "19s";

type GlassesStyle = CSSProperties & Record<`--${string}`, string>;

const glassesStyle: GlassesStyle = {
  "--glasses-marquee-duration": MARQUEE_DURATION,
  "--glasses-marquee-mobile-duration": MARQUEE_MOBILE_DURATION,
  "--glasses-marquee-initial-x": MARQUEE_INITIAL_X,
  "--glasses-marquee-final-x": MARQUEE_FINAL_X,
  "--glasses-marquee-font-size": MARQUEE_FONT_SIZE,
  "--glasses-marquee-secondary-font-size": MARQUEE_SECONDARY_FONT_SIZE,
  "--glasses-marquee-letter-spacing": MARQUEE_LETTER_SPACING,
  "--glasses-marquee-gap": MARQUEE_GAP,
  "--glasses-marquee-y-primary": MARQUEE_Y_PRIMARY,
  "--glasses-marquee-y-secondary": MARQUEE_Y_SECONDARY,
  "--glasses-mobile-focus-duration": MOBILE_FOCUS_DURATION,
};

type MarqueeLineProps = {
  phrase: string;
  variant: "primary" | "secondary";
  reverse?: boolean;
};

function MarqueeLine({ phrase, reverse = false, variant }: MarqueeLineProps) {
  const itemCount = variant === "primary" ? 3 : 2;
  const renderItems = (group: string) =>
    Array.from({ length: itemCount }, (_, index) => (
      <span key={`${group}-${variant}-${index}`}>{phrase}</span>
    ));

  return (
    <div
      className={`glasses-marquee-line glasses-marquee-line--${variant}${
        reverse ? " is-reverse" : ""
      }`}
    >
      <span className="glasses-marquee-group">{renderItems("a")}</span>
      <span className="glasses-marquee-group" aria-hidden="true">
        {renderItems("b")}
      </span>
    </div>
  );
}

function MarqueeCopy() {
  return (
    <>
      <MarqueeLine phrase={PRIMARY_PHRASE} variant="primary" />
      <MarqueeLine phrase={SECONDARY_PHRASE} reverse variant="secondary" />
    </>
  );
}

export function GlassesAnimationSection() {
  const [glassesLoaded, setGlassesLoaded] = useState(false);

  return (
    <section
      id="glasses-clarity"
      className={`olhar-glasses-motion-section${
        glassesLoaded ? " is-glasses-loaded" : ""
      }`}
      style={glassesStyle}
      aria-labelledby="glasses-motion-title"
    >
      <h2 id="glasses-motion-title" className="sr-only">
        Clareza visual em destaque nas lentes da Oticas Olhar
      </h2>

      <div className="olhar-glasses-motion-viewport">
        <div className="olhar-glasses-mobile-camera">
          <div className="olhar-glasses-motion-stage">
            <div
              className="glasses-marquee-layer glasses-marquee-layer--blur"
              aria-hidden="true"
            >
              <MarqueeCopy />
            </div>

            <div className="glasses-lens-clean-layer" aria-hidden="true" />

            <div
              className="glasses-marquee-layer glasses-marquee-layer--sharp"
              aria-hidden="true"
            >
              <MarqueeCopy />
            </div>

            <Image
              src="/oculos-frame.png"
              alt="Armacao preta de oculos"
              width={1740}
              height={904}
              sizes="(max-width: 760px) 168vw, (max-width: 1200px) 88vw, 1180px"
              priority
              fetchPriority="high"
              className="olhar-glasses-image"
              onLoad={() => setGlassesLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
