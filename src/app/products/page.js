"use client";

import { useState } from "react";

import ProductTabs from "@/components/products-tab/ProductTabs";
import StaplesSection from "@/components/products-tab/staples/StaplesSection";
import SpiceSection from "@/components/products-tab/spices/SpiceSection";
import InstantFoodsSection from "@/components/products-tab/instant-food/InstantFoodsSection";
import CondimentsSection from "@/components/products-tab/condiments/CondimentsSection";

import "@/components/products-tab/ProductTabs.css";
import HealthySnackingSection from "@/components/products-tab/healthy-snacking/HealthySnackingSection";
import BeveragesSection from "@/components/products-tab/beverages/BeveragesSection";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("staples");

  return (
    <main className="bg-[#f3efe7]">
      <div className="h-[82px]" />

      <section className="sticky top-[82px] z-40 border-b border-[#294526]/10 bg-[#f3efe7]/95 backdrop-blur-md">
        <ProductTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </section>

      {activeCategory === "staples" && <StaplesSection />}

      {activeCategory === "spices" && <SpiceSection />}

      {activeCategory === "instant-foods" && <InstantFoodsSection />}

      {activeCategory === "condiments" && <CondimentsSection />}
      {activeCategory === "snacking" && <HealthySnackingSection />}
      {activeCategory === "beverages" && <BeveragesSection />}

      {![
        "staples",
        "spices",
        "instant-foods",
        "condiments",
        "snacking",
        "beverages",
      ].includes(activeCategory) && (
        <section className="flex min-h-[70vh] items-center justify-center px-6 text-center">
          <h2 className="font-heading text-4xl font-bold uppercase text-[#294526] sm:text-5xl">
            Category coming next
          </h2>
        </section>
      )}
    </main>
  );
}