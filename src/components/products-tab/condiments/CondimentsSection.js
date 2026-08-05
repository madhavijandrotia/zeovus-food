import Image from "next/image";
import { CONDIMENTS_SECTIONS } from "./condimentsData";
import "./CondimentsSection.css";

export default function CondimentsSection() {
  return (
    <div className="condiments">
      <header className="condiments__intro">
        <p className="condiments__eyebrow">
          Condiments &amp; Sauces
        </p>

        <h1 className="condiments__heading">
          The finishing touch
          <br />
          for every plate.
        </h1>

        <p className="condiments__description">
          Jams, spreads, pickles, chutneys and curry pastes developed with
          dependable ingredients, bold flavour and consistent performance.
        </p>
      </header>

      <div className="condiments__sections">
        {CONDIMENTS_SECTIONS.map((section, index) => (
          <article
            id={section.id}
            key={section.id}
            className={`condiments__section ${
              section.imagePosition === "right"
                ? "condiments__section--reverse"
                : ""
            }`}
          >
            <div className="condiments__media">
              <Image
                src={section.image}
                alt={section.label}
                fill
                priority={index === 0}
                sizes="(max-width: 960px) 100vw, 50vw"
                className="condiments__image"
              />

              <div className="condiments__media-overlay" />
            </div>

            <div className="condiments__content">
              <div className="condiments__title-row">
                <span className="condiments__title-line" />

                <h2>{section.label}</h2>
              </div>

              <div className="condiments__groups">
                {section.groups.map((group, groupIndex) => (
                  <div
                    key={`${section.id}-${groupIndex}`}
                    className="condiments__group"
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