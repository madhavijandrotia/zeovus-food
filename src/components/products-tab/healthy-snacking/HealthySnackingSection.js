import Image from "next/image";
import { HEALTHY_SNACKING_SECTIONS } from "./healthySnackingData";
import "../condiments/CondimentsSection.css";

export default function HealthySnackingSection() {
  return (
    <div className="condiments">
      <header className="condiments__intro">
        <p className="condiments__eyebrow">Healthy Snacking</p>

        <h1 className="condiments__heading">
          Better snacks.
          <br />
          Smarter choices.
        </h1>

        <p className="condiments__description">
          From premium dry fruits and freeze-dried fruits to wholesome snacks
          and speciality vinegars, every product is selected for quality,
          consistency and everyday enjoyment.
        </p>
      </header>

      <div className="condiments__sections">
        {HEALTHY_SNACKING_SECTIONS.map((section, index) => (
          <article
            key={section.id}
            id={section.id}
            className={`condiments__section ${
              section.imagePosition === "right"
                ? "condiments__section--reverse"
                : ""
            }`}
          >
            <div className="condiments__media">
              <Image
                src={section.image}
                alt=""
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                className="condiments__image-background"
                aria-hidden="true"
              />

              <Image
                src={section.image}
                alt={section.label}
                fill
                priority={index === 0}
                quality={90}
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
