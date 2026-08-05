"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import "./PartnerLinks.css";

const PAGES = [
  {
    key: "co-development",
    label: "Co-Development & Formulation Innovation",
    description:
      "Bring us a brief. Or bring us a problem nobody's solved yet. Either way, our formulation team builds it with you.",
    photo: "#c35531",
    src: "/images/CustomFormulationLong.webp",
    href: "/working-together",
  },
  {
    key: "private-label",
    label: "Private Label & White Label",
    description:
      "Launch under your name, built on our formulation and manufacturing standard from the first batch to the last.",
    photo: "#b2bd77",
    src: "/images/PrivateLabelling.webp",
    href: "/working-together",
  },
  {
    key: "distribution",
    label: "Distribution & Regional Partnership",
    description:
      "Take Zeovus Food formulations into markets we haven't reached yet, together.",
    photo: "#2a3c22",
    src: "/images/DistributionPartnershipsLong.webp",
    href: "/working-together",
  },
  {
    key: "bulk-supply",
    label: "Bulk Ingredient & Raw Material Supply",
    description:
      "Staples, flours, proteins and functional ingredients, sourced and supplied at the volume your production line actually needs.",
    photo: "#f69520",
    src: "/images/NewCategoryLong.webp",
    href: "/working-together",
  },
];

const PAGE_COUNT = PAGES.length;
const REVEAL_SPAN = 0.8;

export default function PartnerLinks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotionQuery.matches) {
      section.style.setProperty("--p", PAGE_COUNT);
      return undefined;
    }

    let animationFrameId = null;

    const updateProgress = () => {
      animationFrameId = null;

      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;

      const scrollableDistance = Math.max(
        sectionRect.height - viewportHeight,
        1,
      );

      const travelledDistance = Math.min(
        Math.max(-sectionRect.top, 0),
        scrollableDistance,
      );

      const rawProgress = travelledDistance / scrollableDistance;

      const revealProgress =
        Math.min(rawProgress / REVEAL_SPAN, 1) * PAGE_COUNT;

      section.style.setProperty("--p", revealProgress.toFixed(4));
    };

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section
      id="explore"
      ref={sectionRef}
      className="partner-links"
      aria-label="Partner with Zeovus"
      style={{
        "--count": PAGE_COUNT,
      }}
    >
      <div className="partner-links__stage">
        <div className="partner-links__inner">
          <p className="partner-links__eyebrow">Partner With Us</p>

          <div className="partner-links__row">
            {PAGES.map((page, index) => (
              <Link
                href={page.href}
                key={page.key}
                className="partner-links__card"
                style={{
                  "--i": index,
                  "--photo": page.photo,
                }}
              >
                <div className="partner-links__media">
                  <Image
                    src={page.src}
                    alt={page.label}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 860px) 78vw, 25vw"
                    className="partner-links__image"
                  />
                </div>

                <div className="partner-links__body">
                  <span className="partner-links__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="partner-links__label">
                    {page.label}
                  </h3>

                  <p className="partner-links__description">
                    {page.description}
                  </p>

                  <span
                    className="partner-links__arrow"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}