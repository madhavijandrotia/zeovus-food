import Image from "next/image";
import { STAPLES_SECTIONS } from "./staplesData";
import "./StaplesSection.css";

export default function StaplesSection() {
  return (
    <div className="staples">
      <header className="staples__intro">
        <p className="staples__eyebrow">Staples & Dry Groceries</p>

        <h1 className="staples__heading">
          Everyday essentials,
          <br />
          sourced with intent.
        </h1>

        <p className="staples__description">
          Flours, rice, millets, lentils and pulses selected for quality,
          consistent performance and everyday use.
        </p>
      </header>

      <div className="staples__sections">
        {STAPLES_SECTIONS.map((section, index) => (
          <article
            id={section.id}
            key={section.id}
            className={`staples__section ${
              section.imagePosition === "right"
                ? "staples__section--reverse"
                : ""
            }`}
          >
            <div className="staples__media">
              <Image
                src={section.image}
                alt=""
                fill
                sizes="(max-width: 1000px) 100vw, 50vw"
                className="staples__image-background"
                aria-hidden="true"
              />

              <Image
                src={section.image}
                alt={section.label}
                fill
                sizes="(max-width: 1000px) 100vw, 50vw"
                className="staples__image"
                quality={90}
                priority={index === 0}
              />

              <div className="staples__media-overlay" />
            </div>

            <div className="staples__content">
              <div className="staples__title-row">
                <span className="staples__title-line" />
                <h2>{section.label}</h2>
              </div>

              <div className="staples__groups">
                {section.groups.map((group, groupIndex) => (
                  <div
                    key={`${section.id}-${groupIndex}`}
                    className="staples__group"
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
