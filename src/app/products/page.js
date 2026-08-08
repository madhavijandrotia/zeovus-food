"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import ProductTabs from "@/components/products-tab/ProductTabs";

import StaplesSection from "@/components/products-tab/staples/StaplesSection";
import SpiceSection from "@/components/products-tab/spices/SpiceSection";
import InstantFoodsSection from "@/components/products-tab/instant-food/InstantFoodsSection";
import CondimentsSection from "@/components/products-tab/condiments/CondimentsSection";
import HealthySnackingSection from "@/components/products-tab/healthy-snacking/HealthySnackingSection";
import BeveragesSection from "@/components/products-tab/beverages/BeveragesSection";

import "@/components/products-tab/ProductTabs.css";

const VALID_CATEGORIES = [
  "staples",
  "spices",
  "instant-foods",
  "condiments",
  "snacking",
  "beverages",
];

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState(() => {
    if (VALID_CATEGORIES.includes(categoryFromUrl)) {
      return categoryFromUrl;
    }

    return "staples";
  });

  useEffect(() => {
    if (VALID_CATEGORIES.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    } else {
      setActiveCategory("staples");
    }
  }, [categoryFromUrl]);

  const handleCategoryChange = (category) => {
    if (!VALID_CATEGORIES.includes(category)) return;

    setActiveCategory(category);

    router.replace(`/products?category=${category}`, {
      scroll: false,
    });
  };

  return (
    <main>
      <section className="sticky top-[82px] z-40 border-b border-[#294526]/10 bg-[#f3efe7]/95 backdrop-blur-md">
        <ProductTabs
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      </section>

      {activeCategory === "staples" && <StaplesSection />}

      {activeCategory === "spices" && <SpiceSection />}

      {activeCategory === "instant-foods" && <InstantFoodsSection />}

      {activeCategory === "condiments" && <CondimentsSection />}

      {activeCategory === "snacking" && <HealthySnackingSection />}

      {activeCategory === "beverages" && <BeveragesSection />}
    </main>
  );
}
