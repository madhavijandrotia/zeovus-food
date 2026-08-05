import Image from "next/image";
import { BEVERAGE_SECTIONS } from "./beveragesData";
import "./BeveragesSection.css";

export default function BeveragesSection() {
  return (
    <div className="beverages">
      <header className="beverages__intro">
        <p className="beverages__eyebrow">
          Beverages &amp; Drinks
        </p>

        <h1 className="beverages__heading">
          Nutrition made
          <br />
          easy to enjoy.
        </h1>

        <p className="beverages__description">
          High-protein smoothie blends made with real fruit, functional
          ingredients and everyday convenience.
        </p>
      </header>

      <div className="beverages__sections">
        {BEVERAGE_SECTIONS.map((section, index) => (
          <article
            key={section.id}
            id={section.id}
            className={`beverages__section ${
              section.imagePosition === "right"
                ? "beverages__section--reverse"
                : ""
            }`}
          >
            <div className="beverages__media">
              <Image
                src={section.image}
                alt={section.label}
                fill
                priority={index === 0}
                sizes="(max-width: 960px) 100vw, 50vw"
                className="beverages__image"
              />

              <div className="beverages__media-overlay" />
            </div>

            <div className="beverages__content">
              <div className="beverages__title-row">
                <span className="beverages__title-line" />
                <h2>{section.label}</h2>
              </div>

              <div className="beverages__groups">
                {section.groups.map((group, groupIndex) => (
                  <div
                    key={`${section.id}-${groupIndex}`}
                    className="beverages__group"
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