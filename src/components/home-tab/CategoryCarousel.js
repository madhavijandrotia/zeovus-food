"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./CategoryCarousel.css";

const CATEGORIES = [
  {
    key: "staples",
    name: "Staples & Dry Groceries",
    src: "/categories/staples.png",
    packshotSrc: "/categories/staplesub.webp",
    tagline: "Rice, flours & pantry essentials, done right.",
    photo: "#6b4a2a",
    bg: "#6b4a2a",
    fg: "#f7e9cf",
  },
  {
    key: "spices",
    name: "Spices & Seasonings",
    src: "/categories/spices.png",
    packshotSrc: "/categories/spicessub.webp",
    tagline: "Guntur chillies, aged spice, blended for depth.",
    photo: "#8f2d13",
    bg: "#8f2d13",
    fg: "#ffe3d5",
  },
  {
    key: "instant",
    name: "Ready-to-Eat & Instant Foods",
    src: "/categories/instant-foods.jpeg",
    packshotSrc: "/categories/ChickpeaSoyabeanSpagetiProduct.webp",
    tagline: "Restaurant flavour, ready in minutes.",
    photo: "#c4400d",
    bg: "#c4400d",
    fg: "#fff0e4",
  },
  {
    key: "condiments",
    name: "Condiments & Sauces",
    src: "/categories/sauces.png",
    packshotSrc: "/categories/Sauceessub.webp",
    tagline: "The finishing touch for every plate.",
    photo: "#7d6a0f",
    bg: "#7d6a0f",
    fg: "#fbf3cd",
  },
  {
    key: "snacking",
    name: "Healthy Snacking",
    src: "/categories/healthy-snacking.png",
    packshotSrc: "/categories/frozensub.jpg",
    tagline: "Guilt-free bites, full of flavour.",
    photo: "#3f5c1c",
    bg: "#3f5c1c",
    fg: "#eef7dc",
  },
  {
    key: "beverages",
    name: "Beverages & Smoothies",
    src: "/categories/beverages.jpeg",
    packshotSrc: "/products/instant-smoothies.png",
    tagline: "Brews, blends & refreshers worth pouring.",
    photo: "#1d5566",
    bg: "#1d5566",
    fg: "#e0f2f7",
  },
];

const CATEGORY_COUNT = CATEGORIES.length;

export default function CategoryCarousel() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const mobileQuery = window.matchMedia("(max-width: 860px)");

    let animationFrameId = null;
    let animationEnabled = false;

    const updateScrollProgress = () => {
      animationFrameId = null;

      if (!animationEnabled) return;

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

      const scrollProgress =
        (travelledDistance / scrollableDistance) * (CATEGORY_COUNT - 1);

      section.style.setProperty("--p", scrollProgress.toFixed(4));
    };

    const handleScroll = () => {
      if (!animationEnabled || animationFrameId) return;

      animationFrameId = requestAnimationFrame(updateScrollProgress);
    };

    const configureAnimation = () => {
      animationEnabled = !reducedMotionQuery.matches && !mobileQuery.matches;

      if (animationEnabled) {
        updateScrollProgress();

        window.addEventListener("scroll", handleScroll, {
          passive: true,
        });
      } else {
        section.style.removeProperty("--p");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    configureAnimation();

    reducedMotionQuery.addEventListener("change", configureAnimation);

    mobileQuery.addEventListener("change", configureAnimation);

    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollProgress);

      reducedMotionQuery.removeEventListener("change", configureAnimation);

      mobileQuery.removeEventListener("change", configureAnimation);

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="category-carousel"
      aria-label="Product categories"
      style={{
        "--count": CATEGORY_COUNT,
      }}
    >
      <div className="category-carousel__stage">
        {CATEGORIES.map((category, index) => (
          <article
            key={category.key}
            className="category-carousel__slide"
            style={{
              "--i": index,
              "--photo": category.photo,
              "--pill-bg": category.bg,
              "--pill-fg": category.fg,
            }}
          >
            <div className="category-carousel__media">
              <Image
                src={category.src}
                alt={category.name}
                fill
                priority={index === 0}
                sizes="100vw"
                className="category-carousel__image"
              />
            </div>

            <div className="category-carousel__overlay" />

            <div className="category-carousel__pill">
              <span className="category-carousel__thumbnail">
                <Image
                  src={category.packshotSrc}
                  alt={`${category.name} packshot`}
                  fill
                  sizes="176px"
                  className="category-carousel__thumbnail-image"
                />
              </span>

              <span className="category-carousel__content">
                <h3 className="category-carousel__title">{category.name}</h3>

                <p className="category-carousel__tagline">{category.tagline}</p>
              </span>

              <span className="category-carousel__arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
