import Image from "next/image";
import { SPICES_SECTIONS } from "./spicesData";
import "./SpiceSection.css";

export default function SpicesSection() {
  return (
    <div className="spices">
      <header className="spices__intro">
        <p className="spices__eyebrow">Spices & Seasonings</p>

        <h1 className="spices__heading">
          Flavour built
          <br />
          from the source.
        </h1>

        <p className="spices__description">
          Whole spices, ground spices, blended masalas and specialist
          seasonings developed for flavour, colour and consistency.
        </p>
      </header>

      <div className="spices__sections">
        {SPICES_SECTIONS.map((section, index) => (
          <article
            id={section.id}
            key={section.id}
            className={`spices__section ${
              section.imagePosition === "right"
                ? "spices__section--reverse"
                : ""
            }`}
          >
            <div className="spices__media">
              <Image
                src={section.image}
                alt={section.label}
                fill
                priority={index === 0}
                sizes="(max-width: 960px) 100vw, 50vw"
                className="spices__image"
              />

              <div className="spices__media-overlay" />
            </div>

            <div className="spices__content">
              <div className="spices__title-row">
                <span className="spices__title-line" />

                <h2>{section.label}</h2>
              </div>

              <div className="spices__groups">
                {section.groups.map((group, groupIndex) => (
                  <div
                    key={`${section.id}-${groupIndex}`}
                    className="spices__group"
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