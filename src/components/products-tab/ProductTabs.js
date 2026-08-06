"use client";

const categories = [
  {
    id: "staples",
    label: "Staples & Dry Groceries",
  },
  {
    id: "spices",
    label: "Spices & Seasonings",
  },
  {
    id: "instant-foods",
    label: "Ready-to-Eat & Instant Foods",
  },
  {
    id: "condiments",
    label: "Condiments & Sauces",
  },
  {
    id: "snacking",
    label: "Healthy Snacking",
  },
  {
    id: "beverages",
    label: "Beverages & Smoothies",
  },
];

export default function ProductTabs({ activeCategory, onCategoryChange }) {
  return (
    <nav className="product-tabs" aria-label="Product categories">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            className={`product-tabs__button ${
              isActive ? "product-tabs__button--active" : ""
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </nav>
  );
}
