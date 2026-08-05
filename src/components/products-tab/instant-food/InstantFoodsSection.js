import Image from "next/image";
import { INSTANT_FOOD_SECTIONS } from "./instantFoodsData";
import "./InstantFoodsSection.css";

export default function InstantFoodsSection() {
  return (
    <div className="instant-foods">
      <header className="instant-foods__intro">
        <p className="instant-foods__eyebrow">
          Ready-to-Eat & Instant Foods
        </p>

        <h1 className="instant-foods__heading">
          Built for speed.
          <br />
          Made without shortcuts.
        </h1>

        <p className="instant-foods__description">
          Retort meals, instant rice, noodles and better-for-you pasta designed
          for convenience without compromising flavour, nutrition or
          consistency.
        </p>
      </header>

      <div className="instant-foods__sections">
        {INSTANT_FOOD_SECTIONS.map((section, index) => (
          <article
            id={section.id}
            key={section.id}
            className={`instant-foods__section ${
              section.imagePosition === "right"
                ? "instant-foods__section--reverse"
                : ""
            }`}
          >
            <div className="instant-foods__media">
              <Image
                src={section.image}
                alt={section.label}
                fill
                priority={index === 0}
                sizes="(max-width: 960px) 100vw, 50vw"
                className="instant-foods__image"
              />

              <div className="instant-foods__overlay" />

              <span className="instant-foods__number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="instant-foods__content">
              <div className="instant-foods__title-row">
                <span className="instant-foods__title-line" />
                <h2>{section.label}</h2>
              </div>

              <div className="instant-foods__groups">
                {section.groups.map((group, groupIndex) => (
                  <div
                    key={`${section.id}-${groupIndex}`}
                    className="instant-foods__group"
                  >
                    {group.title && <h3>{group.title}</h3>}

                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}